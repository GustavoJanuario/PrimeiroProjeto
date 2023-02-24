
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      {/* Primeira notícia */}
      <View style={styles.view}>
        <Text style={styles.title}>Curiosidade para o dia 23 de fevereiro</Text>
        <Image 
          style={styles.image}
          source={{uri: 'https://cbltech.com.br/uploads/editor/27715b3856c5fe88c20ca8ceab3ed28e.jpg'}}
        />
        <Text style={styles.text}>Em 2005, era descoberto o Cabir, o primeiro vírus para telefones celulares, infectando o sistema Symbian.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar Leitura</Text>
        </TouchableOpacity>
      </View>

      {/* Segunda notícia */}
      <View style={styles.view}>
        <Text style={styles.title}>Para cientista-chefe de IA da Meta, aprendizado de máquina teria avançado mais rapidamente se outra linguagem tivesse sido adotada em vez de Python</Text>
        <Image 
          style={styles.image}
          source={{uri: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2020/01/07093212/PYTHON.png'}}
        />
        <Text style={styles.text}>Em seu perfil no Twitter, o engenheiro Yann LeCun afirma que o ideal seria uma linguagem interativa e ao mesmo tempo rápida e compilável, como Julia ou da família Lisp. Na Meta, os esforços iniciais de IA começaram com Lua, mas os engenheiros “odiavam” trabalhar com a linguagem.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar Leitura</Text>
        </TouchableOpacity>
      </View>

      {/* Terceira notícia */}
      <View style={styles.view}>
        <Text style={styles.title}>OpenAI já está testando IA jurídica em escritórios de advocacia nos EUA</Text>
        <Image 
          style={styles.image}
          source={{uri: 'https://dunaglobaltimes.no/wp-content/uploads/2023/02/DGT_OpenAI.jpg'}}
        />
        <Text style={styles.text}>A ferramenta Harvey obteve ampla adesão das equipes na pesquisa e escrita de documentos legais. Para David Wakeling, chefe de um escritório de advocacia londrino, a tecnologia representa o início de uma “mudança de paradigma” na indústria jurídica. As informações são do site Wired.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar Leitura</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default App;