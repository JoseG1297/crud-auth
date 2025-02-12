import {date, z} from 'zod'


export const taskSchema = z.object({
    title: z.string({
        required_error: 'title is requiered'
    }).
    min(6, {
        message:"title must be at least 6 characters"
    }),
    description: z.string({
        required_error: 'description is requiered'
    }),
    date: z.date({
        required_error: 'date is requiered'
    }).optional(),
});