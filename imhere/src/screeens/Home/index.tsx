import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'

import { Participant } from '../../components/Participant'

import {styles} from './styles'

export default function Home() {
  const participants = ["Luan","Pedro","Caio", "Mariana", "Lígia", "Rafaela", "Tiago", "Ally", "Manuela", "Rafael", "Yuri", "Diego", "Myke", "Fernanda"]

  function handleParticipantAdd() {
    alert('oi')
  }

  function handleParticipantRemove(name: string) {
    alert(`Removido o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate }>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={`participant-${item}`} 
            name={item} onRemove={()=> 
            handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Adicione participantes ao evento.</Text>
        )}
      />
      
      
    </View>
  )
}