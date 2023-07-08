import React, { useState, useCallback } from "react";
import { Formik, Form } from "formik";

import CustomInput from "@/components/Form/CustomInput";
import { validationSchema } from "@/components/Schemas/Schemas";
import CustomSelect from "@/components/Form/CustomSelect";
import Position from "@/components/Form/Position";
import Toast from "@/components/Toast/Toast";

const MessageBalls = () => {
  const [isToastShowing, setToastShowing] = useState(false);
  const onSubmit = useCallback(() => {
    setToastShowing(true);
  }, []);
  return (
    <div className="p-[50px]">
      <Formik
        initialValues={{
          message: "",
          instance: "-- Drop down to select",
          world: "-- Drop down to select",
          position: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {() => (
          <div className="max-w-[1340px] w-full mx-auto ">
            <Form>
              <CustomInput
                label="Message"
                name="message"
                type="text"
                placeholder="What are you looking to get out of this event?"
              />

              <CustomSelect label="Instance" name="instance">
                <option value="1page">1page</option>
                <option value="1tudien">1tudien</option>
                <option value="2tudien">2tudien</option>
                <option value="BMW Deeper Blue">BMW Deeper Blue</option>
                <option value="BeyondEl">BeyondEl</option>
                <option value="Career Academy">Career Academy</option>
                <option value="Your Virtual Event">Your Virtual Event</option>
                <option value="Zoom Testing Event">Zoom Testing Event</option>
                <option value="1page">1page</option>
                <option value="1tudien">1tudien</option>
                <option value="2tudien">2tudien</option>
                <option value="BMW Deeper Blue">BMW Deeper Blue</option>
                <option value="BeyondEl">BeyondEl</option>
                <option value="Career Academy">Career Academy</option>
                <option value="Your Virtual Event">Your Virtual Event</option>
                <option value="Zoom Testing Event">Zoom Testing Event</option>
              </CustomSelect>

              <CustomSelect label="World" name="world">
                <option value="asda">asda</option>
                <option value="1tuasfgfdien">1tuasfgfdien</option>
                <option value="asda">asda</option>
                <option value="aaaaaaaaaa">aaaaaaaaaa</option>
                <option value="aaaaaaaaaa2">aaaaaaaaaa2</option>
                <option value="aaaaaaaaa3">aaaaaaaaa3</option>
                <option value="bbbb">Your Virtual Event</option>
                <option value="bbbbbbbb2">bbbbbbbb2</option>
              </CustomSelect>
              <Position label="Position" type="number" />
              {/* <Button2 action={onSubmit} label="CREATE MESSAGE" color="green" /> */}

              <button type="submit" className="ml-[191px]">
                Submit
              </button>
              {isToastShowing && (
                <Toast
                  label="Created!"
                  isShow={isToastShowing}
                  onClose={() => setToastShowing(false)}
                />
              )}
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default MessageBalls;
