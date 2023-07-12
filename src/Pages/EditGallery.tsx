import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import galleriesServices from "@/services/galleriesServices";
import useGetAccessToken from "@/custom-hooks/useGetAccessToken";
import { initValueEdit } from "@/types/initValueEdit";
import { Formik, Field, FieldArray, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const EditGallery = () => {
  const { galleryId } = useParams();
  const token = useGetAccessToken();
  const [galleryData, setGalleryData] = useState<any>();
  const [initGalleryValue, setInitGalleryValue] = useState<any>();

  const getGalleryDetail = useCallback(async () => {
    if (galleryId) {
      try {
        const dataGalleryById = await galleriesServices.getGalleryById(
          token,
          galleryId
        );
        setGalleryData(dataGalleryById);
      } catch (error) {
        console.log(error);
      }
    }
  }, [token, galleryId]);

  useEffect(() => {
    getGalleryDetail();
  }, [getGalleryDetail]);

  console.log(galleryData);

  useEffect(() => {
    if (galleryData) {
      setInitGalleryValue({
        title: galleryData.title || "",
        addressable: galleryData.addressable || "",
        keyImage: galleryData.keyImage || "",
        xPos: galleryData.position[0],
        yPos: galleryData.position[1],
        zPos: galleryData.position[2],
        xRot: galleryData.rotation[0],
        yRot: galleryData.rotation[0],
        zRot: galleryData.rotation[0],
        xSca: galleryData.scale[0],
        ySca: galleryData.scale[0],
        zSca: galleryData.scale[0],
      });
    }
  }, [galleryData]);

  const validateSchema = yup.object({});

  return (
    <>
      <Formik
        initialValues={initGalleryValue}
        enableReinitialize={true}
        onSubmit={async (values) => {
          console.log(values);
        }}
        validationSchema={validateSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <span>Gallery Title</span>
              <Field
                type="text"
                name="title"
                className={errors.title && touched.title ? "error" : null}
              />
            </div>

            <div>
              <span>Media Gallery Type</span>
              <Field
                as="select"
                name="addressable"
                className={
                  errors.addressable && touched.addressable ? "error" : null
                }
              >
                <option value="3D Model AMG">3D Model AMG</option>
                <option value="Default AMG (Depreciated)">
                  Default AMG (Depreciated)
                </option>
                <option value="3D Model AMG">3D Model AMG</option>
                <option value="Default AMG (Depreciated)">
                  Default AMG (Depreciated)
                </option>
              </Field>
            </div>

            <div>
              <span>Logo (optional)</span>
              <Field
                type="image"
                name="keyImage"
                alt="Image"
                width="80"
                height="80"
                className={errors.keyImage && touched.keyImage ? "error" : null}
              />
            </div>

            <h1>LINKS</h1>

            <button type="submit">Create Gallery</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditGallery;
