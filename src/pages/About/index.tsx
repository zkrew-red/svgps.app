import { useNavigate } from "react-router-dom";

import Button, { ButtonVariants } from "src/components/Button";
import Icon from "src/components/Icon";

const packages = [
  {
    value: "react",
    icon: "react",
    label: "React",
    link: "https://github.com/aykutkardas/react-icomoon",
  },
  {
    value: "react-native",
    icon: "react",
    label: "React Native",
    link: "https://github.com/aykutkardas/react-icomoon#react-native---demo",
  },
  {
    value: "vue",
    icon: "vue",
    label: "Vue",
    link: "https://github.com/aykutkardas/vue-icomoon",
  },
  {
    value: "svelte",
    icon: "svelte",
    label: "Svelte",
    link: "https://github.com/aykutkardas/svelte-icomoon",
  },
  {
    value: "cli",
    icon: "terminal",
    label: "CLI",
    link: "https://github.com/aykutkardas/svgps-cli",
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-full h-full my-auto flex columns-2">
      <div className="w-full">
        <div className="flex flex-col max-w-[500px] items-start justify-center w-full">
          <h2 className="font-bold text-4xl mb-4 text-neutral-900 dark:text-white">
            No need for many files.
          </h2>
          <p className="mb-4 text-md lg:text-lg text-neutral-600 dark:text-neutral-3  00">
            This app converts your icon files into a{" "}
            <span className="underline underline-offset-2 decoration-fuchsia-500 text-purple-500">
              single JSON file.
            </span>{" "}
            With this file, you can easily use SVG icons in your Frontend and
            Mobile projects or save your icon collection as a single file.
          </p>
          <Button
            variant={ButtonVariants.Primary}
            onClick={() => navigate("/icons")}
          >
            Start Converting
          </Button>
          <div className="absolute bottom-0 flex justify-center">
            {packages.map((packageItem) => (
              <a
                key={packageItem.label}
                href={packageItem.link}
                className="inline-flex items-center select-none p-2 opacity-75 hover:opacity-100 dark:text-white group text-sm sm:text-base"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  icon={packageItem.icon}
                  className="mr-1 w-3 h-3 sm:w-4 sm:h-4  grayscale group-hover:grayscale-0"
                />
                <span>{packageItem.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full"></div>
    </div>
  );
};

export default About;
