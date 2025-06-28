"use client";

import React from 'react';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm, Controller} from "react-hook-form";
import toast from "react-hot-toast";
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const checkoutSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z
    .string()
    .transform((val) => val.trim() === "" ? undefined : val)
    .optional()
    .refine((val) => !val || val.length >= 10, {
      message: "Phone number must be 10 numbers",
    }),
  message: z.string().min(3, 'Your message must be more than 3 characters'),
  referer: z.string().min(3, 'Select an option'),
});
type FormFields = z.infer<typeof checkoutSchema>;



export default function CheckoutForm() {

    const {
        register,
        control,  // for custom components
        handleSubmit,
        reset, 
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(checkoutSchema),
    });

    const handleCountryChange = async () => {
        
    }


    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        console.log("Data :" + data.name, data.email, data.phone, data.referer, data.message);

        const formData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            referer: data.referer,
            message: data.message,
        };


        const res = await fetch('/api/resend/contact', {
            method: 'POST',
            body: JSON.stringify(formData),
        });

        const result = await res.json();
        if (result.success) {

            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/telegram/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            toast.success("Your message is sent");
            reset(); 
        } else {
            toast.error("Failed to send message");
        }
    };


    return (
        <form 
            className='body-section'
            onSubmit={handleSubmit(onSubmit)}
            >
                <div className='form-card'>
                    <div className='form-wrapper'>
                        <div className='duo-input-wrap'>
                            <div className='duo-item'>
                                <Input
                                {...register("name")}
                                type="text"
                                className="input-general border-zinc-700"
                                placeholder='Name'
                                />
                                {errors.name && (
                                    <p className="error-msg">{errors.name.message}</p>
                                )}
                            </div>
                            <div className='duo-item'>
                                <Input
                                {...register("email")}
                                type="email"
                                className="input-general border-zinc-700"
                                placeholder='Email address'
                                />
                                {errors.email && (
                                    <p className="error-msg">{errors.email.message}</p>
                                )}
                            </div>
                        </div>
                        <div className='duo-input-wrap'>
                            <div className='duo-item'>
                                <Input
                                {...register("phone")}
                                type="text"
                                className="input-general border-zinc-700"
                                placeholder='Phone (Optional)'
                                />
                                {errors.phone && (
                                    <p className="error-msg">{errors.phone.message}</p>
                                )}
                            </div>
                            <div className='duo-item'>
                                <Controller
                                control={control}
                                name="referer"
                                render={({ field }) => (
                                    <Select
                                    onValueChange={async (value) => {
                                        field.onChange(value);
                                        await handleCountryChange();
                                    }}
                                    value={field.value}>
                                        <SelectTrigger className="w-full input-general border border-zinc-700 text-white">
                                            <SelectValue
                                            className="text-white"
                                            placeholder="How did you hear about us?" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-zinc-900 text-white">
                                            <SelectGroup className="select-group-cs p-2 rounded">
                                                <SelectLabel className="select-label-cs text-white tracking-wide mb-1">How did you hear about Elevate Retail?</SelectLabel>
                                                    <SelectItem
                                                    className="select-item-cs text-white"
                                                    value="google">Google</SelectItem>
                                                    <SelectItem 
                                                    className="select-item-cs text-white"
                                                    value="family">Family or friend</SelectItem>
                                                    <SelectItem 
                                                    className="select-item-cs text-white"
                                                    value="instagram">Instagram</SelectItem>
                                                    <SelectItem 
                                                    className="select-item-cs text-white"
                                                    value="linkedin">LinkedIn</SelectItem>
                                                    <SelectItem 
                                                    className="select-item-cs text-white"
                                                    value="word">Word of mouth</SelectItem>
                                                    <SelectItem 
                                                    className="select-item-cs text-white"
                                                    value="newsletter">Newsletter</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                                />
                                {errors.referer && (
                                    <p className="error-msg">{errors.referer.message}</p>
                                )}
                            </div>
                        </div>
                        <div className='single-input-wrap'>
                            <Textarea
                            {...register("message")}
                            className="input-general textarea-cs border-zinc-700"
                            placeholder="Type your message here." />
                            {errors.message && (
                                <p className="error-msg">{errors.message.message}</p>
                            )}
                        </div>

                    </div>
                    <button 
                        className="contact-submit-btn"
                        disabled={isSubmitting} 
                        type="submit">
                            <div className='btn-wrap'>
                                <div className='btn-left'>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </div>
                                <div className='btn-right'>
                                    <div className='btn-right-inner'>
                                        <FontAwesomeIcon icon={faArrowRight} className="btn-icon btn-icon1" />
                                        <FontAwesomeIcon icon={faArrowRight} className="btn-icon btn-icon2" />
                                    </div>
                                </div>
                            </div>
                    </button>

                    {errors.root && <div className="root-error text-red-500">{errors.root.message}</div>}

                </div>
        </form>
    )
}
