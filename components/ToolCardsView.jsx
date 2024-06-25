import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ToolCard from './ToolCard';
import { images } from '../constants';
import {router} from 'expo-router'

const ToolCardsView = () => {
  const zoomIn = {
    0: {
      scale: 0.9,
    },
    1: {
      scale: 1.1,
    },
  };

  const zoomOut = {
    0: {
      scale: 1,
    },
    1: {
      scale: 0.9,
    },
  };

  const tools = [
    { id: '1', router: 'HammerTool', name: 'Hammer', caption: 'Great for driving nails', icon: images.hammer },
    { id: '2', router: 'FlashlightTool', name: 'Flashlight', caption: 'Handy in dark situations', icon: images.flashOn },
    { id: '3', router: 'WrenchTool', name: 'Wrench', caption: 'Useful for bolts', icon: images.wrench },
    // Add more tools as needed
  ];

  const [activeItem, setActiveItem] = useState(tools[0].id);


  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].item.id);
    }
  };

  return (
    <FlatList
      data={tools}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ToolCard
          handlePress={() => router.push(item.router)}
          name={item.name}
          caption={item.caption}
          icon={item.icon}
          active={activeItem === item.id}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
        />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 80,
      }}
      contentOffset={{ x: 55 }}
      contentContainerStyle={{ paddingRight: 110, paddingLeft: 20 }} 
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ToolCardsView;
