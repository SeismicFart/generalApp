import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { TextInput } from 'react-native-gesture-handler';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check your emails!')
        } catch (error) {
            console.log(error);
            alert('Sign up failed')
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Check your emails!');
        } catch (error) {
            console.log(error);
            alert('Sign up failed');
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Email' autoCapitalize='none'
            onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput style={styles.input} placeholder='Password' autoCapitalize='none'
            onChangeText={(text) => setPassword(text)} secureTextEntry={true}></TextInput>
            { loading ? <ActivityIndicator size="large" color='#0000ff' />
            : <>
            <Button title="Login" onPress={signIn} />
            <Button title="Sign Up" onPress={signUp} />
            </>}
        </View>
    )

}

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        justifyContent: 'center',
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
});
