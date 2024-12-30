import "../assets/home.css";

function Home() {
  const sizeLeading = 64;
  const sizeTrailing = 32;
  const services = [
    {
      title: "Web Development",
      description:
        "We build websites that are fast, secure, and easy to manage.",
      leading: `<svg xmlns="http://www.w3.org/2000/svg" width="${sizeLeading}" height="${sizeLeading}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-affiliate"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275"/><path d="M11.683 12.317l5.759 -5.759"/><path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"/><path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"/><path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"/><path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0"/></svg>`,
      trailing: `<svg xmlns="http://www.w3.org/2000/svg" width="${sizeTrailing}" height="${sizeTrailing}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trending-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l6 -6l4 4l8 -8"/><path d="M14 7l7 0l0 7"/></svg>`,
    },
    {
      title: "Mobile Development",
      description:
        "We create mobile apps that are responsive, user-friendly, and scalable.",
      leading: `<svg xmlns="http://www.w3.org/2000/svg" width="${sizeLeading}" height="${sizeLeading}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-affiliate"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275"/><path d="M11.683 12.317l5.759 -5.759"/><path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"/><path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"/><path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"/><path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0"/></svg>`,
      trailing: `<svg xmlns="http://www.w3.org/2000/svg" width="${sizeTrailing}" height="${sizeTrailing}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trending-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l6 -6l4 4l8 -8"/><path d="M14 7l7 0l0 7"/></svg>`,
    },
    {
      title: "Cloud Services",
      description:
        "We provide cloud solutions that are reliable, cost-effective, and secure.",
      leading: `<svg xmlns="http://www.w3.org/2000/svg" width="${sizeLeading}" height="${sizeLeading}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-affiliate"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275"/><path d="M11.683 12.317l5.759 -5.759"/><path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"/><path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"/><path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"/><path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0"/></svg>`,
      trailing: `<svg xmlns="http://www.w3.org/2000/svg" width="${sizeTrailing}" height="${sizeTrailing}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trending-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l6 -6l4 4l8 -8"/><path d="M14 7l7 0l0 7"/></svg>`,
    },
  ];

  const partners = [
    {
      name: "American Express",
      logoUrl:
        "https://diffco.us/wp-content/uploads/2024/09/logo-american-express.svg",
    },
    {
      name: "American Express",
      logoUrl:
        "https://diffco.us/wp-content/uploads/2024/09/logo-american-express.svg",
    },
    {
      name: "American Express",
      logoUrl:
        "https://diffco.us/wp-content/uploads/2024/09/logo-american-express.svg",
    },
    {
      name: "American Express",
      logoUrl:
        "https://diffco.us/wp-content/uploads/2024/09/logo-american-express.svg",
    },
    {
      name: "American Express",
      logoUrl:
        "https://diffco.us/wp-content/uploads/2024/09/logo-american-express.svg",
    },
  ];

  const services2Size = 64;
  const services2 = [
    {
      title: "Service 1",
      description: "Description for service 1 goes here",
      icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="${services2Size}"  height="${services2Size}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" /><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" /><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /><path d="M5 3l-1 -1" /><path d="M4 7h-1" /><path d="M14 3l1 -1" /><path d="M15 6h1" /></svg>`,
    },
    {
      title: "Service 2",
      description: "Description for service 2 goes here",
      icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="${services2Size}"  height="${services2Size}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" /><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" /><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /><path d="M5 3l-1 -1" /><path d="M4 7h-1" /><path d="M14 3l1 -1" /><path d="M15 6h1" /></svg>`,
    },
    {
      title: "Service 3",
      description: "Description for service 3 goes here",
      icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="${services2Size}"  height="${services2Size}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" /><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" /><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /><path d="M5 3l-1 -1" /><path d="M4 7h-1" /><path d="M14 3l1 -1" /><path d="M15 6h1" /></svg>`,
    },
    {
      title: "Service 3",
      description: "Description for service 3 goes here",
      icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="${services2Size}"  height="${services2Size}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" /><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" /><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /><path d="M5 3l-1 -1" /><path d="M4 7h-1" /><path d="M14 3l1 -1" /><path d="M15 6h1" /></svg>`,
    },
    {
      title: "Service 3",
      description: "Description for service 3 goes here",
      icon: `<svg  xmlns="http://www.w3.org/2000/svg"  width="${services2Size}"  height="${services2Size}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" /><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" /><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /><path d="M5 3l-1 -1" /><path d="M4 7h-1" /><path d="M14 3l1 -1" /><path d="M15 6h1" /></svg>`,
    },
  ];

  const technologiesSize = 98;
  const technologies = [
    {
      name: "React",
      logoUrl: `<svg  xmlns="http://www.w3.org/2000/svg"  width="${technologiesSize}"  height="${technologiesSize}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" /></svg>`,
    },
    {
      name: "React",
      logoUrl: `<svg  xmlns="http://www.w3.org/2000/svg"  width="${technologiesSize}"  height="${technologiesSize}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" /></svg>`,
    },
    {
      name: "React",
      logoUrl: `<svg  xmlns="http://www.w3.org/2000/svg"  width="${technologiesSize}"  height="${technologiesSize}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" /></svg>`,
    },
    {
      name: "React",
      logoUrl: `<svg  xmlns="http://www.w3.org/2000/svg"  width="${technologiesSize}"  height="${technologiesSize}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" /></svg>`,
    },
    {
      name: "React",
      logoUrl: `<svg  xmlns="http://www.w3.org/2000/svg"  width="${technologiesSize}"  height="${technologiesSize}"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" /></svg>`,
    },
  ];

  return (
    <div className="h-full w-full min-h-screen flex flex-col items-center mt-10">
      <div className="w-full flex flex-col items-start mt-4">
        <button className="flex items-center border border-white text-white px-4 py-2 rounded-xl mb-5 bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M3.6 9h16.8" />
            <path d="M3.6 15h16.8" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a17 17 0 0 1 0 18" />
          </svg>
          Based in Silicon Valley. Operate worldwide.
        </button>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          Empower your business with{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 to-purple-600 text-transparent bg-clip-text">
            top-class software development
          </span>
        </h1>
      </div>

      <div className="w-full flex flex-wrap justify-center mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm text-white p-12 m-4 rounded-2xl shadow-lg w-full xl:w-auto md:w-full"
          >
            {" "}
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="mb-0 lg:mb-16 xl:mb-20">{service.description}</p>
            <div className="flex items-center justify-between mb-2">
              <div className="mr-2 transition-all duration-300 hover:scale-110 group">
                {service.leading && (
                  <div
                    className="group-hover:text-primary"
                    dangerouslySetInnerHTML={{ __html: service.leading }}
                  />
                )}
              </div>
              <div className="ml-2">
                {service.trailing && (
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-75 backdrop-filter p-7 backdrop-blur-lg">
                    <div
                      dangerouslySetInnerHTML={{ __html: service.trailing }}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partners */}
      <div className="w-full py-6 mb-36 flex flex-row items-center mt-10 overflow-hidden bg-white/10 backdrop-blur-sm">
        {" "}
        <div className="pl-8 w-64 flex-shrink-0 bg-white py-4">
          <h2 className="text-2xl font-bold text-black">Our Partners</h2>
        </div>
        <div className="flex animate-slide">
          {[...partners].map((partner, index) => (
            <img
              key={index}
              src={partner.logoUrl}
              alt={partner.name}
              className="sliding-logo"
              style={{ minWidth: "200px", marginRight: "20px" }}
              width={300}
              height={300}
            />
          ))}
        </div>
        <div className="flex animate-slide">
          {[...partners].map((partner, index) => (
            <img
              key={`second-${index}`}
              src={partner.logoUrl}
              alt={partner.name}
              className="sliding-logo"
              style={{ minWidth: "200px", marginRight: "20px" }}
              width={300}
              height={300}
            />
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="grid w-full p-12 bg-slate-100 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <h1 className="col-span-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-8 sm:mb-12 md:mb-16">
          Our Services
        </h1>

        {services2.map((service, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg relative">
            <div className="grid grid-cols-[1fr,auto] gap-4 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-semibold text-xl">
                  {service.description}
                </p>
              </div>
              <div
                className="text-gray-400 hover:text-black transition-colors"
                dangerouslySetInnerHTML={{ __html: service.icon }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="w-full flex flex-col items-center bg-white p-12">
        <h1 className="text-black my-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          {" "}
          Technologies We Use
        </h1>
        <div className="flex w-full flex-wrap justify-evenly mt-10">
          {technologies.map((technology, index) => (
            <div
              key={index}
              className="tech-box p-4 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div
                className="tech-icon mx-auto text-black"
                dangerouslySetInnerHTML={{ __html: technology.logoUrl }}
              />
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
}

export default Home;
