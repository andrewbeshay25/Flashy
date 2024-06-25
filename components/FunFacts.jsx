import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FunFacts = () => {
  const [factIndex, setFactIndex] = useState(0);
  const [captionIndex, setCaptionIndex] = useState(0);

  const funFacts = new Map([
    ["facts", [
      "Flashlights are super cool",
      "Wrenches are useful too",
      "Hammers are great for driving nails into wood and other materials.",
      "Screwdrivers come in different shapes, like flathead and Phillips.",
      "Tape measures are essential for accurate measurements in any project.",
      "Utility knives are versatile tools for cutting various materials.",
      "Pliers are handy for gripping, bending, and cutting wires.",
      "Levels help ensure your projects are perfectly horizontal or vertical.",
      "Clamps hold your materials steady while you work on them.",
      "Chisels are used for carving or cutting hard materials like wood or metal.",
      "Saws are essential for cutting through wood, metal, or plastic.",
      "Drills are perfect for making holes or driving screws.",
      "Sanders smooth out rough surfaces for a professional finish.",
      "Workbenches provide a sturdy surface to work on your projects.",
      "Vices hold materials firmly in place while you work.",
      "Ratchets and sockets make tightening and loosening nuts and bolts a breeze.",
      "Files are used to smooth or shape hard materials.",
      "Allen wrenches are essential for tightening hex screws.",
      "Calipers measure the distance between two opposite sides of an object.",
      "Safety goggles protect your eyes from debris and splashes.",
      "Ear protection is crucial in loud workshop environments.",
      "Toolboxes keep all your tools organized and easy to transport."
    ]],
    ["caption", [
      "Have you ever heard...",
      "Did you know...",
      "Guess what...",
      "Fun fact...",
      "Here's something interesting...",
      "You might be surprised to learn...",
      "Check this out...",
      "Tool trivia time...",
      "Ever wondered...",
      "Here's a cool fact..."
    ]]
  ]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const handleTap = () => {
    setFactIndex(getRandomInt(funFacts.get('facts').length));
    setCaptionIndex(getRandomInt(funFacts.get('caption').length));
  };

  return (
    <TouchableOpacity
      onPress={handleTap}
      activeOpacity={0.8}
    >
      <View className="rounded-xl h-[180px] bg-green-200">
        <Text className="text-green-50 text-lg font-pregular px-5 py-5 text-center">
          {funFacts.get('caption')[captionIndex]}
        </Text>
        <View className="py-5">
          <Text className="text-green-50 text-lg font-psemibold px-5 text-center">
            {funFacts.get('facts')[factIndex]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FunFacts;
