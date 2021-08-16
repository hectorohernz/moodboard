import React from 'react'

let imagePath = './Static-Images/'
let stubImages = [
  {
    fileName: 'bike.jpeg',
    alt: 'Bmx Bike Jump.',
  },
  {
    fileName: 'car.jpeg',
    alt: 'Car parked at night.',
  },
  {
    fileName: 'mount.jpeg',
    alt: 'Car parked at night.',
  },
  {
    fileName: 'people.jpeg',
    alt: 'Car parked at night.',
  },
]
let stubImages2 = [
  {
    fileName: 'bike.jpeg',
    alt: 'Bmx Bike Jump.',
  },
  {
    fileName: 'punk-101.jpeg',
    alt: 'Car parked at night.',
  },
  {
    fileName: 'skate.jpeg',
    alt: 'Car parked at night.',
  },
  {
    fileName: 'smoke.jpeg',
    alt: 'Car parked at night.',
  },
  {
    fileName: 'laugh.jpeg',
    alt: 'Laughing with people.',
  }
]

function ImageResolution(props) {
  return (
    <img
      src={props.imageUrl}
      alt={props.altTag}
      className={"w-28 rounded-xl " + props.addtionalClasses} 
    />
  )
}

function PhotoCollage() {
  return (
      <>
    <div className="flex justify-around">
      {stubImages.map((photoInfo, key) => {
        return (
          <ImageResolution
            imageUrl={imagePath + photoInfo.fileName}
            key={key}
            altTag={photoInfo.fileName}
            addtionalClasses="mx-5"
          />
        )
      })}
    </div>
    <div className="flex justify-around my-10">
    {stubImages2.map((photoInfo, key) => {
        return (
          <ImageResolution
            imageUrl={imagePath + photoInfo.fileName}
            key={key}
            altTag={photoInfo.fileName}
            addtionalClasses="mx-5"
          />
        )
      })}
    </div>
</>
  )
}

export default PhotoCollage
