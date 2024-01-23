import React from "react";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import Select from "@/components/ui/select";
import prisma from "@/lib/prisma";
import { jobTypes } from "@/lib/job-types";
import { Button } from "./ui/button";
import { jobFilterSchema, JobFilterType } from "@/lib/validation";
import { redirect } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";

type JobFilterSideBarProps = {
  defaultValues: JobFilterType;
};

async function filterJobs(formdata: FormData) {
  "use server";

  const values = Object.fromEntries(formdata.entries());
  const { q, type, location, remote } = jobFilterSchema.parse(values);
  let queryParams = new URLSearchParams({
    ...(q && { q: q.trim() }),
    ...(type && { type }),
    ...(location && { location }),
    ...(remote && { remote: "true" }),
  });

  redirect(`/?${queryParams.toString()}`);
}

const JobFilterSideBar = async ({ defaultValues }: JobFilterSideBarProps) => {
  const distinctLocations = (await prisma.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean),
    )) as string[];

  return (
    <aside className="sticky h-fit rounded-lg border bg-background p-4 md:top-[100px] md:w-[260px]">
      <form action={filterJobs} key={JSON.stringify(defaultValues)}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input
              type="text"
              id="q"
              name="q"
              placeholder="Title, Company, etc."
              defaultValue={defaultValues.q || ""}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="type">Type</Label>
            <Select
              id="type"
              name="type"
              defaultValue={defaultValues.type || ""}
            >
              <option value="">All types</option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location">Location</Label>
            <Select
              id="location"
              name="location"
              defaultValue={defaultValues.location || ""}
            >
              <option value="">All locations</option>
              {distinctLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remote"
              name="remote"
              className="scale-125 accent-black"
              defaultChecked={defaultValues.remote}
            />
            <Label htmlFor="location">Remote jobs</Label>
          </div>
          <FormSubmitButton className="w-full">Filter Jobs</FormSubmitButton>
        </div>
      </form>
    </aside>
  );
};

export default JobFilterSideBar;
