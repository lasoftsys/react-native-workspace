/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/style-prop-object */
import { useNavigation } from '@react-navigation/native';
import { Container, Input, Button } from '@shared-ui';
import { AuthScreensProps } from '@utils/cargo';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CountryList from 'country-list-with-dial-code-and-flag'
import { useForm, Controller } from 'react-hook-form';

type SearchFormData = {
  searchText?: string;
};

type Country = {
  name: string;
  dial_code: string;
  code: string;
}

type ItemProps = {
  name: string;
  dial_code: string;
  code: string;
  flag?: string;
  onPress: () => void
}

const Item = ({ name, dial_code, onPress }: ItemProps) => {

  return (
    <Button
      onPress={onPress}
      className='flex-row justify-start mb-2 py-1'
    >
      <Text className='text-base font-semibold text-dark font-nunito mr-2'>
        {name}
      </Text>
      <Text className='text-sm font-medium text-["#222B45"] font-nunito'>
        {`(${dial_code})`}
      </Text>
    </Button>
  )
}

const SelectCountry = () => {
  const navigation = useNavigation<AuthScreensProps>()
  const [countries, setCountries] = useState<Country[]>([])
  const { control, watch } = useForm<SearchFormData>({
    defaultValues: {
      searchText: '',
    }
  });
  const searchValue = watch('searchText', '');

  useEffect(() => {
    setCountries(CountryList.getAll())
  }, [])

  // const filteredCountries = countries.filter((cnt) => cnt.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Container
      flex={1}
    >
      <Container className='absolute top-2 w-12 h-1.5 self-center bg-gray-700 rounded-md mt-1 z-10' />

      <Container flex={0.15} column className='justify-around px-5 pt-5'>
        <Text className='text-xl font-bold font-nunito text-dark mb-1.5'>Select a country</Text>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder='Search for country'
              inputWrapperStyles={styles.inputWrapperStyles}
              inputStyles={styles.inputStyles}
              wrapperStyles={{ ...styles.wrapperStyles }}
              icon={<Feather name="search" size={18} color="#222B45" />}
            />

          )}
          name="searchText"
          rules={{ required: true }}
        />
      </Container>
      <Container flex={0.85} className='px-6 pt-2'>
        <FlatList data={countries}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Item name={item.name} dial_code={item.dial_code}
            code={item.code}
            onPress={() => {
              // Pass and merge params back to home screen
              navigation.navigate({
                name: 'register',
                params: { dial_code: item.dial_code },
                merge: true,
              });
            }} />}
          keyExtractor={item => item.dial_code}
        />
      </Container>

    </Container>
  );
};

export default SelectCountry;
const styles = StyleSheet.create({
  wrapperStyles: {
    padding: 0,
  },
  inputWrapperStyles: {
    backgroundColor: '#E3E8F2',
    borderWidth: 1.5,
    borderColor: '#E3E8F2',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 47
  },
  inputStyles: {
    color: '#222B45',
    fontSize: 14,
    fontWeight: "500"
  },
})
