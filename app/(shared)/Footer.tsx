import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BlOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus blanditiis dolorem repellendus voluptates. In
            laudantium minima voluptatem consequuntur vero soluta accusamus
            repellat architecto ex minus enim, laborum ipsam excepturi officia.
          </p>
          <p>© Blog of the Future All Rights Reserved</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Masa orci senectus</p>
          <p className="my-5">Some random links again</p>
          <p>Ullamcorper vivamus</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact us</h4>
          <p className="my-5">Masa orci senectus</p>
          <p className="my-5">Some random links again</p>
          <p>(333)333-3333</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
