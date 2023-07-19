import { varsityImage } from "@/config/app.config";
import Image from "next/image";

export default function ProductFeature() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              The Fine Details
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Tim sewing kami yang terampil dalam produksi dan desain, sewing
              terbaik agar mendapatkan kualitas yang anda inginkan. <br /> This
              is my daily sewing pattern konveksitangerang.id
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <Image
                  src={varsityImage[4]}
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                Yang membedakan jaket-jaket kami adalah perhatian kami terhadap
                detail. Kami menggunakan teknik bordir yang menghasilkan desain
                yang rumit dan sempurna. Setiap jahitan diolah dengan teliti,
                menciptakan hasil yang mengesankan dan rapi.
              </p>
            </div>
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <Image
                  src={varsityImage[5]}
                  alt="konveksi tangerang varsity"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                Jaket Varsity kami tidak hanya bergaya tetapi juga dirancang
                untuk kenyamanan maksimal Anda. Kami menggunakan bahan
                berkualitas terbaik, termasuk fleece berkualitas tinggi, aksen
                kulit pada lengan, dan lapisan quilting dacron untuk memastikan
                daya tahan dan kenyamanan yang sempurna.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
