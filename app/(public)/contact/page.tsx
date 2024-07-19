"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomSection } from "@/components/layout/CustomSection";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { BrandInput } from "@/components/common/BrandInput";
import { BrandTextarea } from "@/components/common/BrandTextarea";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export default function ContactPage() {
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
    <CustomSection style="mt-[89px] py-[100px] w-full">
      <div className="col-span-6 flex flex-col justify-between">
        <div className="h-full">
          <p className="text-[100px]">Contact</p>
        </div>
        <div className="text-[15px] font-light h-full">
          312 W. 2ND ST #3938
          <br /> Casper Wyoming 82601 United States
        </div>
        <div className="text-[40px] uppercase h-full">
          <p>+1 (307) 439 4923</p>
          <p>info@unyield.co</p>
        </div>
      </div>
      <div className="col-span-6 bg-brand-yellow px-10 py-20">
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
    </CustomSection>
  );
}
