import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
        .required("Price is required")
        .positive("Price must be positive"),
    category: Yup.string().required("Category is required"),
    image: Yup.string().required("Image is required"),
    color: Yup.array()
        .of(
            Yup.object().shape({
                name: Yup.string().required("Color name is required"),
                hex: Yup.string().required("Color hex is required"),
                src: Yup.string().required("Color must have image "),
            })
        )
        .min(1, "At least one color is required"),
});

export default validationSchema;
