import React from "react";

export const Products = () => {
  return (
    <div className="px-40 py-20 text-black30">
      <h2 className="text-4xl font-bold text-black12 pb-12">
        Try our other free products
      </h2>
      <div className="flex flex-wrap gap-4">
        <div className="w-[22rem]">
          <img
            src="/images/privacy.png"
            alt="privacy_policy_generator"
            className="h-48 mb-4"
          />
          <h3 className="text-xl pb-2 text-black12 text-bold">
            Privacy Policy Generator
          </h3>
          <p>
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </p>
        </div>

        <div className="w-[22rem]">
          <img
            src="/images/tnc.png"
            alt="terms_and_conditions_generator"
            className="h-48 mb-4"
          />
          <h3 className="text-xl pb-2 text-black12 text-bold">
            Terms & Conditions Generator
          </h3>
          <p>
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </p>
        </div>

        <div className="w-[22rem]">
          <img
            src="/images/domain.png"
            alt="domain_name_generator"
            className=" h-48  mb-4"
          />
          <h3 className="text-xl pb-2 text-black12 text-bold">
            Domain Name Generator
          </h3>
          <p>
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </p>
        </div>

        <div className="w-[22rem]">
          <img
            src="/images/invoice.png"
            alt="invoice_generator"
            className="h-48 mb-4"
          />
          <h3 className="text-xl pb-2 text-black12 text-bold">
            Invoice Generator
          </h3>
          <p>
            Stock your store with 100s of products and start selling to
            customers in minutes, without the hassle of inventory or packaging.
          </p>
        </div>
      </div>
    </div>
  );
};
