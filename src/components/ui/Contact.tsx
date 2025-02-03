import { m} from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-4xl font-bold text-maroon-red">Let's Connect</h2>
        
        <m.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mx-auto max-w-2xl space-y-6"
        >
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg bg-gray-900 p-4 focus:outline-none focus:ring-2 focus:ring-maroon-red"
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg bg-gray-900 p-4 focus:outline-none focus:ring-2 focus:ring-maroon-red"
            />
          </div>
          
          <div>
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full rounded-lg bg-gray-900 p-4 focus:outline-none focus:ring-2 focus:ring-maroon-red"
             />
          </div>

          <m.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-lg bg-maroon-red py-3 text-white transition-all hover:bg-[#A52A2A]"
          >
            Send Message
          </m.button>
        </m.form>
      </div>
    </section>
  );
};

export default Contact;