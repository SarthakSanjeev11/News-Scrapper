import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthor } from '../redux/fetchSlice';



function Card({ data, author,index }) {
    const Content = data?.description[0] || '';

    const cleanHTMLContent = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };

    const pureData = cleanHTMLContent(Content);
    const dispatch = useDispatch()

    const getImageUrl = (data) => {
        if (data?.enclosure && data?.enclosure[0]?.$.url) {
            return data.enclosure[0].$.url;
        } else if (data["media:thumbnail"] && data["media:thumbnail"][0]?.$.url) {
            return data["media:thumbnail"][0].$.url;
        } else if (data["media:content"] && data["media:content"][0]?.$.url) {
            return data["media:content"][0].$.url;
        } else {
            return 'default_image_url';
        }
    };

    function getMainDomain(url) {
        try {
          const parsedUrl = new URL(url);
          const hostnameParts = parsedUrl.hostname.split('.');
          if (hostnameParts.length > 2) {
            return hostnameParts[hostnameParts.length - 2];
          }
          return hostnameParts[0];
        } catch (error) {
          console.error('Invalid URL', error);
          return null;
        }
      }

    const extractedContent = getMainDomain(data?.link[0]);

    return (
        <div className="p-4">
            <div className="  bg-clip-border rounded-xl p-4 bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
                <div className="  w-full h-full m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                    <img
                        src={getImageUrl(data)}
                        alt="card-image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                        Author: {author || extractedContent}
                    </h6>
                    <h6 className="block mb-4 font-sans   antialiased text-xs leading-relaxed tracking-normal text-gray-700 uppercase">
                        Date of Publish: {data.pubDate}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {data?.title}
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                        {pureData}
                    </p>
                    <a href="#" className="inline-block">
                        <Link
                            to={`/read?id=${index}&${data?.title}`}
                            data-ripple-light="true"
                            type="button"
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        >
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg>
                        </Link>
                    </a>
                </div>
                <div className="p-6 pt-0"></div>
            </div>
        </div>
    );
}

export default Card;
