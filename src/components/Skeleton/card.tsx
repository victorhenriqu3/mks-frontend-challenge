import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonCard = () => {
  return (
    <>
      <li>
        <ContentLoader
          speed={0.8}
          width={226}
          height={308}
          viewBox="0 0 226 308"
          backgroundColor="#dcdeea"
          foregroundColor="#ffffff"
        >
          <rect x="150" y="179" rx="5" ry="5" width="74" height="30" />
          <rect x="0" y="229" rx="5" ry="5" width="226" height="30" />
          <rect x="0" y="278" rx="5" ry="5" width="226" height="30" />
          <rect x="0" y="177" rx="5" ry="5" width="106" height="35" />
          <rect x="42" y="0" rx="0" ry="5" width="142" height="158" />
        </ContentLoader>
      </li>
    </>
  );
};

export default SkeletonCard;
