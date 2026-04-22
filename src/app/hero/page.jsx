
import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <div>
      <Button>Hero button</Button>

      <Button variant="tertiary">Tertiary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <div className="">
        <Card className="w-full items-stretch md:flex-row">
          <div className="relative  w-full shrink-0 overflow-hidden rounded-2xl ">
            <Image
              alt="Cherries"
              className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
              loading="lazy"
              src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
              width={120}
              height={120}
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <Card.Header className="gap-1">
              <Card.Title className="pr-8">Become an ACME Creator!</Card.Title>
              <Card.Description>
                Lorem ipsum dolor sit amet consectetur. Sed arcu donec id
                aliquam dolor sed amet faucibus etiam.
              </Card.Description>
              <CloseButton
                aria-label="Close banner"
                className="absolute top-3 right-3"
              />
            </Card.Header>
            <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  Only 10 spots
                </span>
                <span className="text-xs text-muted">
                  Submission ends Oct 10.
                </span>
              </div>
              <Button className="w-full sm:w-auto">Apply Now</Button>
            </Card.Footer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HeroPage;
