import * as Yup from "yup"

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description : Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    image: Yup.string().required('Image is required').url('Image must be a valid URL'),
    color: Yup.array().of(
            Yup.string().required( 'Color must be in "name:#hex" format')
        ).min(1, 'Minimum of one color is required'),
})

export default validationSchema;