"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";

import { toast } from "sonner";
// import Link from "next/link";

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(1, "Message is required"),
});

export default function GetInTuchReuseable() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      console.log(values);
      toast.success("Your message has been sent successfully!");
      form.reset();
    } catch {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className=" my-2 md:my-10 mt-[60px] lg:mt-[120px]">
      <div className="container mx-auto bg-[#FFF] rounded-2xl shadow-md p-10 grid grid-cols-1 md:grid-cols-2 ">
        {/* Left side: Form */}
        <div className="p-10 order-1 md:order-1">
          <h2
            className="text-2xl md:text-4xl font-bold text-[#101828]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Get In Touch
          </h2>
          <p className="text-[#6C757D] text-sm pt-2 md:text-base mb-6">
            Our friendly team would love to hear from you.{" "}
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Frist Name"
                          {...field}
                          className="py-5 rounded-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Last Name"
                          {...field}
                          className="py-5 rounded-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@company.com"
                        {...field}
                        className="py-5 rounded-sm"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>US +1 (555) 000-0000</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+1234567890"
                        {...field}
                        className="py-5 rounded-sm"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message here..."
                        {...field}
                        className="h-[150px] rounded-sm align-top"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Agree Checkbox */}
              {/* <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        className="cursor-pointer"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <span className="text-sm text-gray-600">
                      You agree to our friendly{" "}
                      <Link
                        href="/terms-conditions"
                        className="text-green-600 underline cursor-pointer"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-green-600 underline cursor-pointer"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-[#1256A9] cursor-pointer rounded-sm"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>

        {/* Right side: Image */}
        <div className="relative h-64 md:h-auto order-2 md:order-2 ">
          <Image
            src="/images/gettuch.jpg"
            alt="This is Contact Image"
            fill
            className="object-cover md:rounded-r-2xl"
          />
        </div>
      </div>
    </section>
  );
}
