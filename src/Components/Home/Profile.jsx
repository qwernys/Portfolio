import React from 'react'
import MyPhoto from "/src/images/me.jpg"

export default function Profile() {
    return (
      <ReactRoundedImage
        image={MyPhoto}
        roundedColor="#321124"
        roundedSize="3"
        borderRadius="100"
        resizeMode="contain"
    />
    )
}