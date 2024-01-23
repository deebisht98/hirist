import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="felx-col sm:flex-rpw flex justify-between gap-3 sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Hirist</h3>
            <p className="text-sm text-muted-foreground">
              Connecting talents with opportunities
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Hirist, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
