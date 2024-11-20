import React from 'react';
import { Text, View, Image } from 'react-native';

const MateriFlexBox = () => {
  return (
    <View>
      {/* Baris kotak dengan Flexbox */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#ee5253',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ backgroundColor: '#00FF00', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#00FFFF', width: 50, height: 50 }} />
      </View>

      {/* Baris menu navigasi */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>

      {/* Profil Section */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
        <Image
          source={{
            uri: 
            'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/889/2024/01/22/gibran-3042148967.png'
          }}
          style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>mmd</Text>
          <Text>1  subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default MateriFlexBox;
