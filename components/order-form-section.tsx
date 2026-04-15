"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import OrderButtons from "@/components/order-buttons";
import { siteContent } from "@/data/site-content";

type FormValues = {
  name: string;
  phone: string;
  address: string;
  order: string;
  notes: string;
};

type FormErrors = Record<keyof FormValues, string>;
type Touched = Record<keyof FormValues, boolean>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  address: "",
  order: "",
  notes: "",
};

const initialErrors: FormErrors = {
  name: "",
  phone: "",
  address: "",
  order: "",
  notes: "",
};

const initialTouched: Touched = {
  name: false,
  phone: false,
  address: false,
  order: false,
  notes: false,
};

function validateField(field: keyof FormValues, rawValue: string): string {
  const value = rawValue.trim();

  if (field === "name") {
    if (value.length < 3) {
      return "الاسم يجب أن يكون 3 أحرف على الأقل.";
    }
  }

  if (field === "phone") {
    const normalized = value.replace(/[\s-]/g, "");
    const valid = /^(?:\+?\d{8,15}|0\d{8,10})$/.test(normalized);
    if (!valid) {
      return "يرجى إدخال رقم هاتف صحيح.";
    }
  }

  if (field === "address") {
    if (value.length < 6) {
      return "يرجى كتابة عنوان أوضح للتوصيل.";
    }
  }

  if (field === "order") {
    if (value.length < 8) {
      return "يرجى كتابة تفاصيل الطلب بشكل أوضح.";
    }
  }

  if (field === "notes") {
    if (value.length > 250) {
      return "الملاحظات طويلة جدًا (الحد الأقصى 250 حرفًا).";
    }
  }

  return "";
}

function validateAll(values: FormValues): FormErrors {
  return {
    name: validateField("name", values.name),
    phone: validateField("phone", values.phone),
    address: validateField("address", values.address),
    order: validateField("order", values.order),
    notes: validateField("notes", values.notes),
  };
}

export default function OrderFormSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [touched, setTouched] = useState<Touched>(initialTouched);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasErrors = useMemo(() => Object.values(errors).some(Boolean), [errors]);

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
    }

    if (successMessage) {
      setSuccessMessage(null);
    }
  }

  function handleBlur(field: keyof FormValues) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, values[field]) }));
  }

  function markAllTouched() {
    setTouched({
      name: true,
      phone: true,
      address: true,
      order: true,
      notes: true,
    });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    markAllTouched();

    const hasValidationError = Object.values(nextErrors).some(Boolean);
    if (hasValidationError) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      const orderId = `AR-${Date.now().toString().slice(-5)}`;
      setSuccessMessage(`تم استلام طلبك المبدئي بنجاح. رقم الطلب: ${orderId}. سيتم التواصل معك للتأكيد.`);
      setValues(initialValues);
      setErrors(initialErrors);
      setTouched(initialTouched);
      setIsSubmitting(false);
    }, 450);
  }

  function fieldClass(field: keyof FormValues) {
    const hasFieldError = touched[field] && Boolean(errors[field]);
    return [
      "rounded-xl border bg-[#1f0b07] px-4 py-3 text-[#fff4e3] outline-none transition",
      hasFieldError ? "border-[#ff6e6e] focus:border-[#ff8787]" : "border-[#ffb36a]/20 focus:border-[#ff9f3f]",
    ].join(" ");
  }

  return (
    <section
      id="order-form"
      className="relative overflow-clip bg-[radial-gradient(circle_at_20%_20%,rgba(255,138,34,0.15),transparent_42%),radial-gradient(circle_at_80%_35%,rgba(204,42,31,0.18),transparent_44%),#1a0805] px-6 py-20 md:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb45d]">{siteContent.orderForm.eyebrow}</p>
          <h2 className="text-3xl font-extrabold leading-tight text-[#fff1dc] md:text-5xl">{siteContent.orderForm.title}</h2>
          <p className="text-base leading-8 text-[#ffd6ab] md:text-lg">{siteContent.orderForm.description}</p>

          <OrderButtons />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          onSubmit={onSubmit}
          noValidate
          className="rounded-[2rem] border border-[#ffab57]/24 bg-[#2a0f0a]/75 p-5 backdrop-blur-sm md:p-8"
        >
          <AnimatePresence>
            {successMessage ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-5 rounded-2xl border border-emerald-300/30 bg-emerald-500/12 px-4 py-3 text-sm font-semibold text-emerald-100"
                role="status"
                aria-live="polite"
              >
                {successMessage}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#ffe2bd]">
              الاسم
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={(event) => handleChange("name", event.target.value)}
                onBlur={() => handleBlur("name")}
                placeholder={siteContent.orderForm.placeholders.name}
                className={fieldClass("name")}
              />
              {touched.name && errors.name ? <span className="text-xs text-[#ff8d8d]">{errors.name}</span> : null}
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#ffe2bd]">
              رقم الهاتف
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={(event) => handleChange("phone", event.target.value)}
                onBlur={() => handleBlur("phone")}
                placeholder={siteContent.orderForm.placeholders.phone}
                className={fieldClass("phone")}
                dir="ltr"
              />
              {touched.phone && errors.phone ? <span className="text-xs text-[#ff8d8d]">{errors.phone}</span> : null}
            </label>
          </div>

          <div className="mt-4 grid gap-4">
            <label className="flex flex-col gap-2 text-sm font-semibold text-[#ffe2bd]">
              العنوان
              <input
                type="text"
                name="address"
                value={values.address}
                onChange={(event) => handleChange("address", event.target.value)}
                onBlur={() => handleBlur("address")}
                placeholder={siteContent.orderForm.placeholders.address}
                className={fieldClass("address")}
              />
              {touched.address && errors.address ? (
                <span className="text-xs text-[#ff8d8d]">{errors.address}</span>
              ) : null}
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#ffe2bd]">
              الطلب
              <textarea
                name="order"
                rows={4}
                value={values.order}
                onChange={(event) => handleChange("order", event.target.value)}
                onBlur={() => handleBlur("order")}
                placeholder={siteContent.orderForm.placeholders.order}
                className={`${fieldClass("order")} resize-none`}
              />
              {touched.order && errors.order ? <span className="text-xs text-[#ff8d8d]">{errors.order}</span> : null}
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-[#ffe2bd]">
              ملاحظات
              <textarea
                name="notes"
                rows={3}
                value={values.notes}
                onChange={(event) => handleChange("notes", event.target.value)}
                onBlur={() => handleBlur("notes")}
                placeholder={siteContent.orderForm.placeholders.notes}
                className={`${fieldClass("notes")} resize-none`}
              />
              {touched.notes && errors.notes ? <span className="text-xs text-[#ff8d8d]">{errors.notes}</span> : null}
            </label>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[var(--rayyan-orange)] px-6 py-3 text-sm font-extrabold text-[#2b0a05] shadow-[0_12px_30px_rgba(255,138,34,0.24)] transition disabled:cursor-not-allowed disabled:opacity-70 md:text-base"
            >
              {isSubmitting ? "جاري إرسال الطلب..." : "إرسال الطلب"}
            </button>
            <a
              href={siteContent.actions.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#ffd59f]/45 bg-[#3a140d]/82 px-5 py-3 text-sm font-bold text-[#ffd59f] md:text-base"
            >
              أو الطلب عبر واتساب
            </a>
          </div>

          {hasErrors ? (
            <p className="mt-4 text-xs text-[#ffb0b0]">يوجد حقول تحتاج تصحيح قبل الإرسال.</p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
