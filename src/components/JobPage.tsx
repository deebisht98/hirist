import { formarMoney } from "@/lib/utils";
import { Job } from "@prisma/client";
import { Banknote, Briefcase, Globe2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MarkDown from "./MarkDown";

type JobPageProps = {
  job: Job;
};

const JobPage = ({
  job: {
    title,
    description,
    companyLogoUrl,
    companyName,
    location,
    locationType,
    salary,
    type,
    applicationUrl,
  },
}: JobPageProps) => {
  return (
    <section className="w-full grow space-y-5">
      <div className="flex items-center gap-3">
        {companyLogoUrl && (
          <Image
            src={companyLogoUrl}
            alt="Company logo"
            width={100}
            height={100}
            className="rounded-xl"
          />
        )}
        <div>
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="font-semibold">
              {applicationUrl ? (
                <Link
                  href={new URL(applicationUrl).origin}
                  className="text-green-500 hover:underline"
                >
                  {companyName}
                </Link>
              ) : (
                <span>{companyName}</span>
              )}
            </p>
          </div>
          <div className="text-muted-foreground">
            <p className="flex items-center gap-1.5">
              <Briefcase size={16} className="" />
              {type}
            </p>
            <p className="flex items-center gap-1.5">
              <MapPin size={16} className="" />
              {locationType}
            </p>
            <p className="flex items-center gap-1.5">
              <Globe2 size={16} className="" />
              {location || "WorldWide  "}
            </p>
            <p className="flex items-center gap-1.5">
              <Banknote size={16} className="" />
              {formarMoney(salary)}
            </p>
          </div>
        </div>
      </div>
      <div>{description && <MarkDown>{description}</MarkDown>}</div>
    </section>
  );
};

export default JobPage;