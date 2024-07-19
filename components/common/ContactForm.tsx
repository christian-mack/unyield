"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomSection } from "../layout/CustomSection";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { BrandInput } from "./BrandInput";
import { BrandTextarea } from "./BrandTextarea";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <CustomSection style="py-[240px]">
      <div className="col-span-12 pb-[156px]">
        <p className="uppercase text-[209px] leading-none font-medium tracking-tight">
          Start a project?
        </p>
      </div>
      <div className="col-span-8 bg-brand-yellow px-14 py-20">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-28">
            <div className="flex gap-16">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <BrandInput
                        placeholder="NAME"
                        className="bg-brand-yellow border-b-[1px] border-black rounded-none px-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <BrandInput
                        placeholder="EMAIL"
                        className="bg-brand-yellow border-b-[1px] border-black rounded-none px-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <BrandTextarea
                      placeholder="TELL US ABOUT YOUR PROJECT"
                      className="resize-none bg-brand-yellow border-b-[1px] border-black rounded-none px-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="text-[15px] rounded-none uppercase font-light px-5 py-7 hover:text-black hover:bg-brand-yellow hover:border-black border-[1px]"
            >
              Submit
              <GoArrowUpRight className="inline-block ml-20" size={30} />
            </Button>
          </form>
        </Form>
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-2 auto-rows-auto h-full items-center justify-items-center">
          <div className="relative col-span-1 row-span-1">
            <Image
              src="/assets/sample-brand-1.png"
              alt="Sample Brand 1"
              width={125}
              height={125}
            />
          </div>
          <div className="relative col-span-1 row-span-1">
            <Image
              src="/assets/sample-brand-2.png"
              alt="Sample Brand 2"
              width={125}
              height={125}
            />
          </div>
          <div className="relative col-span-1 row-span-1">
            <Image
              src="/assets/sample-brand-3.png"
              alt="Sample Brand 3"
              width={125}
              height={125}
            />
          </div>
          <div className="relative col-span-1">
            <Image
              src="/assets/sample-brand-4.png"
              alt="Sample Brand 4"
              width={125}
              height={125}
            />
          </div>
          <div className="relative col-span-1">
            <Image
              src="/assets/sample-brand-5.png"
              alt="Sample Brand 5"
              width={125}
              height={125}
            />
          </div>
          <div className="relative col-span-1">
            <Image
              src="/assets/sample-brand-6.png"
              alt="Sample Brand 6"
              width={125}
              height={125}
            />
          </div>
        </div>
      </div>
    </CustomSection>
  );
}
