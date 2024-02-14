"use client";

import { useDispatch, useSelector } from "react-redux";
import FeedbackListItem from "./FeedbackListItem";
import { useEffect, useState } from "react";
import useFetch from "@/app/hooks/UseFetch";
import useFilter from "@/app/hooks/UseFilter";
import UseSort from "@/app/hooks/UseSort";
import { useRouter } from "next/navigation";
import { setNumber } from "@/app/lib/features/slice/feedbuckNumberSlice";
import FeedbackItemListSkeleton from "../skeleton/FeedbackItemListSkeleton";
import FeedbackListItemMobile from "./FeedbackListItemMobile";
import FeedbuckButton from "../Header/FeedbackButton";

export const FeedbackListMobile = () => {
  const { data, loading } = useFetch(`api/posts/`);
  const [feedbacks, setFeedbacks] = useState<any>([]);

  const dispatch = useDispatch();
  const router = useRouter();
  const sortData = UseSort();
  const filterData = useFilter();

  const filter = useSelector((state: any) => state.filterSlice.status);
  const sort = useSelector((state: any) => state.sortSlice.status);

  useEffect(() => {
    function makeData() {
      const filteredData = filterData(data, filter, "category");
      const sortedData = sortData(filteredData, sort);
      setFeedbacks(sortedData);
      router.refresh();
    }
    makeData();
  }, [data, filter, sort]);

  useEffect(() => {
    if (feedbacks) {
      dispatch(setNumber(feedbacks.length));
    }
  }, [feedbacks]);

  return (
    <div className="flex sm:hidden px-6 flex-col align-middle w-full items-center min-h-svh">
      {loading && <FeedbackItemListSkeleton />}
      {feedbacks &&
        feedbacks.map((f: any) => (
          <FeedbackListItemMobile key={f._id} feedback={f} isDetail={false} />
        ))}

      {feedbacks?.length === 0 && (
        <div className="bg-white rounded-md w-full flex flex-col items-center py-40 gap-6 mt-4">
          <svg width="102" height="108" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="nonzero" fill="none" opacity=".5">
              <path
                d="M48.73 15.593C25.822 15.59 7.246 34.224 7.235 57.22c-.01 22.997 18.55 41.649 41.458 41.665 22.909.016 41.494-18.61 41.516-41.606a41.72 41.72 0 00-12.132-29.473A41.4 41.4 0 0048.73 15.593z"
                stroke="#3A4374"
                strokeWidth="1.045"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <ellipse
                fill="#231F20"
                cx="70.476"
                cy="43.691"
                rx="1.917"
                ry="2.862"
              />
              <path
                d="M0 44.902l97.429-21.645-19.167-5.612S67.881.37 65.11.01C62.338-.351 11.979 10.43 11.979 10.43L8.785 34.77 0 44.902zM20.284 103.503L9.272 86.027l48.14-8.265 3.305 16.746 4.888-15.424 24.628 4.882-5.007 19.537z"
                fill="#3A4374"
              />
              <path
                d="M81.97 65.607l4.438-.617L88.7 81.618a2.115 2.115 0 01-1.799 2.387l-.261.036a2.11 2.11 0 01-2.377-1.806L81.97 65.607z"
                fill="#FFF"
              />
              <path
                d="M86.352 84.471A2.519 2.519 0 0183.87 82.3l-2.292-16.634a.4.4 0 01.343-.45l4.432-.617a.398.398 0 01.296.08c.085.063.14.16.151.265l2.276 16.626a2.508 2.508 0 01-.479 1.868 2.49 2.49 0 01-1.66.97l-.256.04a2.474 2.474 0 01-.328.024zm-3.929-18.518l2.236 16.234c.132.936.991 1.59 1.925 1.467h.263a1.714 1.714 0 001.454-1.932l-2.236-16.234-3.642.465z"
                fill="#3A4374"
              />
              <path
                fill="#FFF"
                d="M78.562 50.93l7.159-.995 2.242 16.263-7.16.995z"
              />
              <path
                d="M80.802 67.605a.43.43 0 01-.24-.08.361.361 0 01-.151-.265l-2.244-16.274a.394.394 0 01.072-.296.423.423 0 01.263-.153l7.187-.994a.39.39 0 01.448.345l2.244 16.266a.4.4 0 01-.344.448l-7.187.995-.048.008zm-1.789-16.33l2.132 15.472 6.39-.882-2.133-15.472-6.389.882z"
                fill="#3A4374"
              />
              <path
                d="M85.573 78.014l.725-.1a3.248 3.248 0 013.664 2.773l3.013 21.85a3.248 3.248 0 01-2.77 3.661l-.726.1a3.248 3.248 0 01-3.664-2.773l-3.013-21.85a3.248 3.248 0 012.77-3.66z"
                fill="#FFF"
              />
              <path
                d="M88.429 106.83a2.959 2.959 0 01-2.923-2.558L82.31 81.064a2.959 2.959 0 012.516-3.343l2.108-.288a2.949 2.949 0 013.322 2.525l3.195 23.248a2.964 2.964 0 01-2.516 3.335l-2.108.297-.4-.008zm-1.086-28.628a1.838 1.838 0 00-.296 0l-2.108.289a2.13 2.13 0 00-1.422.842c-.35.455-.5 1.034-.415 1.603l3.194 23.248a2.166 2.166 0 002.396 1.844l2.108-.297a2.163 2.163 0 001.837-2.405l-3.194-23.248a2.159 2.159 0 00-2.124-1.868l.024-.008z"
                fill="#3A4374"
              />
              <ellipse
                fill="#FFF"
                cx="81.569"
                cy="46.288"
                rx="19.19"
                ry="19.264"
              />
              <path
                d="M81.553 65.953c-10.474-.005-19.093-8.275-19.569-18.778-.476-10.503 7.359-19.525 17.789-20.485 10.43-.96 19.768 6.482 21.202 16.897 1.47 10.746-5.992 20.662-16.691 22.182-.905.122-1.818.184-2.731.184zm0-38.536c-.868 0-1.736.059-2.596.177-7.532 1.045-13.696 6.542-15.616 13.927-1.92 7.386.78 15.206 6.844 19.812a18.74 18.74 0 0020.853 1.234c6.56-3.86 10.157-11.307 9.114-18.868-1.298-9.305-9.207-16.24-18.567-16.282h-.032z"
                fill="#3A4374"
              />
              <ellipse
                fill="#FFF"
                cx="81.569"
                cy="46.288"
                rx="15.589"
                ry="15.648"
              />
              <path
                d="M81.56 62.338c-8.606 0-15.665-6.846-15.962-15.48-.297-8.635 6.275-15.953 14.862-16.548 8.586-.596 16.098 5.745 16.987 14.339.889 8.593-5.165 16.348-13.69 17.536-.728.103-1.462.154-2.196.153zm0-31.265c-.707 0-1.414.049-2.116.144-8.096 1.127-13.848 8.489-13.009 16.65.839 8.162 7.967 14.19 16.122 13.634 8.154-.556 14.405-7.496 14.136-15.697-.268-8.2-6.959-14.713-15.132-14.731z"
                fill="#3A4374"
              />
              <path
                d="M99.896 89.714a11.645 11.645 0 00-3.913-3.206c-4.576-2.405-9.822-2.325-14.638-.802-1.709.545-5.023 1.323-5.199 3.6a2.115 2.115 0 001.526 2.004 6.254 6.254 0 002.675.104 6.887 6.887 0 00-3.618.914c-1.03.73-1.597 2.324-.75 3.294.374.404.861.683 1.397.802a6.365 6.365 0 003.554-.048c-1.251.24-2.47.625-3.634 1.146-.703.313-1.485.866-1.405 1.604.08.737.798 1.074 1.453 1.298 1.378.475 2.817.745 4.273.802a8.4 8.4 0 00-3.474 1.5c-1.598 1.346-1.598 3.903.567 4.633a6.366 6.366 0 002.14.248c6.389 0 14.04-.801 18.368-6.14a9.993 9.993 0 002.044-9.067 8.702 8.702 0 00-1.366-2.686z"
                fill="#FFF"
              />
              <path
                d="M80.802 107.984c-.75.037-1.5-.053-2.22-.265a2.762 2.762 0 01-1.9-2.108 3.502 3.502 0 011.197-3.207 5.952 5.952 0 011.725-1.002 14.816 14.816 0 01-2.396-.617c-1.062-.369-1.597-.914-1.717-1.603-.12-.69.495-1.523 1.598-2.044l.567-.24a4.211 4.211 0 01-.432-.105 3.008 3.008 0 01-1.597-.914 2.219 2.219 0 01-.471-1.732 3.209 3.209 0 011.294-2.14c.248-.175.516-.32.798-.433a2.461 2.461 0 01-1.525-2.3c.184-2.342 3.067-3.207 4.967-3.793l.511-.152c5.335-1.691 10.646-1.395 14.942.802a11.99 11.99 0 014.049 3.35 9.207 9.207 0 011.445 2.79 10.363 10.363 0 01-2.116 9.444c-4.528 5.555-12.37 6.277-18.695 6.285l-.024-.016zm-.759-11.055c-.887.226-1.752.53-2.587.906-.375.168-1.23.625-1.166 1.219.064.593.67.801 1.182.97 1.34.47 2.742.74 4.16.801a.392.392 0 01.384.353.4.4 0 01-.296.433 8.289 8.289 0 00-3.322 1.419 2.659 2.659 0 00-.934 2.453 1.953 1.953 0 001.373 1.499 5.73 5.73 0 002.005.224c6.157 0 13.768-.69 18.08-5.988a9.567 9.567 0 001.98-8.698 8.413 8.413 0 00-1.325-2.541 11.094 11.094 0 00-3.777-3.127c-4.113-2.124-9.2-2.405-14.335-.801l-.52.16c-1.692.513-4.264 1.29-4.408 3.086.031.753.54 1.4 1.262 1.604a3.86 3.86 0 001.43.176c.375-.04.742-.064 1.094-.088a.416.416 0 01.423.369.408.408 0 01-.36.433c-.359 0-.734.08-1.117.088a4.898 4.898 0 00-2.308.753c-.525.382-.874.96-.967 1.604-.063.395.041.799.288 1.114.325.334.742.563 1.198.657a6.11 6.11 0 002.396.16c.32-.08.646-.152.966-.216a.4.4 0 01.463.297.41.41 0 01-.271.48 6.097 6.097 0 01-.99.201z"
                fill="#3A4374"
              />
              <path
                d="M55.367 46.593s9.727 14.67 3.84 14.879c-5.885.208-6.388-1.339-6.388-1.339"
                fill="#FFF"
              />
              <path
                d="M58.154 61.937c-4.936 0-5.646-1.355-5.742-1.603a.425.425 0 01.263-.53.415.415 0 01.52.265s.718 1.243 5.997 1.05a1.348 1.348 0 001.294-.673c1.261-2.461-3.514-10.622-5.463-13.556a.418.418 0 01.128-.553.414.414 0 01.56.088c.742 1.122 7.186 11.063 5.51 14.43a2.139 2.139 0 01-1.997 1.13l-1.07-.048z"
                fill="#3A4374"
              />
              <ellipse
                fill="#C0C5DC"
                cx="82.455"
                cy="45.799"
                rx="3.53"
                ry="6.036"
              />
              <ellipse
                fill="#3A4374"
                cx="39.259"
                cy="45.799"
                rx="2.691"
                ry="4.882"
              />
            </g>
          </svg>
          <h1 className="font-bold text-lg">There is no feedback yet.</h1>
          <div>
            <p className="text-sm">
              Got a suggestion? Found a bug Found a bug that needs to be
              squashed?
            </p>
            <p className="textsm">
              We love hearing about new ideas to improve our app
            </p>
          </div>
          <FeedbuckButton title="+Add Feedback" link="/new" />
        </div>
      )}
    </div>
  );
};
