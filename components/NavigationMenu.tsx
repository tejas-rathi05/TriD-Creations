"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { solutionLinks } from "@/constants";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>INDUSTRIES</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-center items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/industries/gems-jewellery"
                  >
                    <Image
                      src="/images/Gems&Jewellery_Banner2.png"
                      width={200}
                      height={200}
                      alt="Banner"
                    />
                    <div className="flex flex-col items-start">
                      <h4 className="mb-2 mt-4 text-lg font-medium">
                        Gems & Jewellery
                      </h4>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Elevate your jewelry designs with cutting-edge 3D
                        modeling and captivating animations.
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <div className="grid grid-cols-2">
                <ListItem href="/industries/architecture" title="Architecture">
                  Transform architectural visions into immersive experiences
                  through advanced 3D solutions.
                </ListItem>
                <ListItem href="/industries/toys-games" title="Toys & Games">
                  Bring playfulness to life with realistic 3D representations
                  for toys and games.
                </ListItem>
                <ListItem
                  href="/industries/fashion-apparel"
                  title="Fashion & Apparel"
                >
                  Showcase your fashion creations in stunning 3D detail for a
                  captivating visual experience.{" "}
                </ListItem>
                <ListItem
                  href="/industries/electronics-mobile"
                  title="Electronics & Mobile"
                >
                  Dive into the world of high-tech visuals with 3D
                  representations for electronics and mobile devices.
                </ListItem>
                <ListItem
                  href="/industries/automotive-aftermarket"
                  title="Automotive & Aftermarket"
                >
                  Drive engagement with realistic 3D visualizations for the
                  automotive industry, including aftermarket solutions.{" "}
                </ListItem>
                <ListItem
                  href="/industries/health-beauty"
                  title="Health & Beauty"
                >
                  Enhance the visual appeal of health and beauty products
                  through immersive 3D presentations.
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>SOLUTIONS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {solutionLinks.map((solutionLinks) => (
                <ListItem
                  key={solutionLinks.title}
                  title={solutionLinks.title}
                  href={solutionLinks.href}
                >
                  {solutionLinks.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              ABOUT US
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              OUR WORK
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
