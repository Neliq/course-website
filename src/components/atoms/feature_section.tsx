import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Resource Files",
    description:
      "We provide you with all the necessary files to complete the course. No need to search for them on the internet.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Video Tutorials",
    description:
      "All our courses are accompanied by video tutorials. You can watch them at any time and as many times as you want.",
    icon: LockClosedIcon,
  },
  {
    name: "Feedback for each task",
    description:
      "After completing each task, you will receive feedback from our experts. This will help you improve your skills.",
    icon: ArrowPathIcon,
  },
  {
    name: "Unique course topics",
    description:
      "Our courses are unique and cover the most important topics in the field. You won't find them anywhere else.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Only the useful stuff",
    description:
      "We don't waste your time with unnecessary information. We focus only on the most important topics.",
    icon: CogIcon,
  },
  {
    name: "Completely free to use",
    description:
      "All our courses are completely free to use. You don't have to pay anything to access them.",
    icon: ServerIcon,
  },
];

const FeatureSection: React.FC = () => {
  return (
    <div className="relative">
      <div className="mx-auto text-center sm:max-w-3xl lg:max-w-7xl">
        <h2 className="text-lg font-semibold text-indigo-600">Why us?</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          The most innovative courses on the market
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Our courses are completely different from the rest. We focus on the
          most important topics and provide them in a modern and
          easy-to-understand way.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-white px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

export { FeatureSection };
