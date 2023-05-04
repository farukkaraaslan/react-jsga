import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

function AddCar() {
  const [modelYear, setModelYear] = useState(0);
  const [initialForm, setinitialForm] = useState({ modelYear: 0, brandId: 0 });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <Formik initialValues={initialForm}>
            <Form>
              <p>{modelYear}</p>
              <div className="form-group">
                <div className="label">Model Yılı </div>
                <Field
                  className="form-control"
                  name="modelYear"
                  type="number"
                />
                <div className="label">Brand Id</div>
                <Field className="form-control" name="brandId" type="number" />
              </div>
              <button className="btn btn-secondary">Ekle</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AddCar;
