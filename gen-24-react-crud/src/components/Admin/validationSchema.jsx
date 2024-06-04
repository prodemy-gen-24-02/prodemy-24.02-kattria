import * as Yup from "yup"

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description : Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    image: Yup.string().required('Image is required'),
    color: Yup.array().of(
        Yup.object().shape({
            colorName: Yup.string().required('Color name is required'),
            colorHex: Yup.string().required('Color hex is required'),
          })
        ).min(1, 'At least one color is required'),
})

export default validationSchema;