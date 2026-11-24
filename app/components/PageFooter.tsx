"use client";

import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const linkStyle =
  "text-gray-600 transition-colors duration-200 hover:text-blue-600 hover:underline";

const iconStyle =
  "flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-700 bg-transparent text-gray-700 " +
  "transition-all duration-200 ease-out hover:bg-gray-700 hover:text-white hover:shadow-lg " +
  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-700/30 active:scale-95";

export default function PageFooter() {
  return (
    <Footer className="rounded-none border-t border-white/50 bg-linear-to-br from-sky-100 via-sky-200 to-blue-200 px-6 py-10 shadow-none md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid w-full gap-10 md:flex md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <span className="font-mono text-lg font-bold tracking-tight text-blue-600 md:text-xl">
              AI PROMPT MARKETPLACE
            </span>
            <p className="mt-3 text-sm text-gray-600">
              Discover, create, and share powerful AI prompts for ChatGPT,
              Midjourney, Claude, and more.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
            <div>
              <FooterTitle title="Explore" className="text-gray-800" />
              <FooterLinkGroup col className="space-y-3 text-sm">
                <FooterLink href="/prompts" className={linkStyle}>
                  Browse Prompts
                </FooterLink>
                <FooterLink href="/collection" className={linkStyle}>
                  Collection
                </FooterLink>
                <FooterLink href="/add" className={linkStyle}>
                  Add Prompt
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title="Categories" className="text-gray-800" />
              <FooterLinkGroup col className="space-y-3 text-sm">
                <FooterLink href="#" className={linkStyle}>
                  AI Copy
                </FooterLink>
                <FooterLink href="#" className={linkStyle}>
                  Art
                </FooterLink>
                <FooterLink href="#" className={linkStyle}>
                  Workflow
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title="Legal" className="text-gray-800" />
              <FooterLinkGroup col className="space-y-3 text-sm">
                <FooterLink href="#" className={linkStyle}>
                  Privacy Policy
                </FooterLink>
                <FooterLink href="#" className={linkStyle}>
                  Terms &amp; Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider className="my-8 border-gray-700/20" />

        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="/"
            by="AI Prompt Marketplace™"
            year={2026}
            className="text-gray-600"
          />
          <div className="mt-4 flex gap-3 sm:mt-0">
            <FooterIcon href="#" icon={BsGithub} className={iconStyle} />
            <FooterIcon href="#" icon={BsTwitter} className={iconStyle} />
            <FooterIcon href="#" icon={BsInstagram} className={iconStyle} />
          </div>
        </div>
      </div>
    </Footer>
  );
}