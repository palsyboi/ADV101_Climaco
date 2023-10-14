import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useForm, Controller } from "react-hook-form";

const myStyle = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: "center",
 alignItems: "center",
 padding: 20,
 },
 headerText: {
 fontSize: 24,
 fontWeight: "bold",
 marginBottom: 20,
 color: "white",
 fontFamily: "Arial",
 },
 inputContainer: {
 marginBottom: 15,
 width: "100%",
 },
 labelText: {
 fontSize: 16,
 fontWeight: "bold",
 marginBottom: 5,
 color: "white",
 },
 input: {
 backgroundColor: "white",
 padding: 15,
 borderRadius: 20, // Make the input boxes rounded
 width: "100%",
 borderWidth: 1,
 borderColor: "#FFFFFF",
 color: "#FFFFFF",
 fontFamily: "Arial",
 },
 button: {
 backgroundColor: "#FFFFFF",
 padding: 20,
 borderRadius: 25, // Make the button rounder
 width: "100%",
 alignItems: "center",
 },
 buttonText: {
 color: "black",
 fontSize: 18,
 },
 errorText: {
 color: "red",
 fontFamily: "Arial",
 fontSize: 14,
 },
});

export default function Home() {
 const { control, handleSubmit, formState: { errors } } = useForm({
 defaultValues: {
 email: '',
 password: '',
 }
 });

 const onSubmit = data => {
 console.log(data);
 };

 return (
 <ImageBackground
 source={{ uri: 'https://iphoneswallpapers.com/wp-content/uploads/2023/06/Alone-in-Snow-Forest-iPhone-Wallpaper-HD.jpg' }}
 style={myStyle.container}
 >
 <View style={myStyle.container}>
 <Text style={myStyle.headerText}>Login your account</Text>

 <View style={myStyle.inputContainer}>
 <Text style={myStyle.labelText}>Email:</Text>
 <Controller
 control={control}
 rules={{
 required: true,
 }}
 render={({ field: { onChange, onBlur, value } }) => (
 <TextInput
 placeholder="Enter your Email"
 onBlur={onBlur}
 onChangeText={onChange}
 value={value}
 style={myStyle.input}
 keyboardType="email-address"
 />
 )}
 name="email"
 />
 {errors.email && <Text style={myStyle.errorText}>This is required.</Text>}
 </View>

 <View style={myStyle.inputContainer}>
 <Text style={myStyle.labelText}>Password:</Text>
 <Controller
 control={control}
 rules={{
 required: true,
 }}
 render={({ field: { onChange, onBlur, value } }) => (
 <TextInput
 placeholder="Enter password"
 onBlur={onBlur}
 onChangeText={onChange}
 value={value}
 style={myStyle.input}
 secureTextEntry={true}
 />
 )}
 name="password"
 />
 {errors.password && <Text style={myStyle.errorText}>This is required.</Text>}
 </View>

 <TouchableOpacity style={myStyle.button} onPress={handleSubmit(onSubmit)}>
 <Text style={myStyle.buttonText}>Sign In</Text>
 </TouchableOpacity>
 </View>
 </ImageBackground>
 );
}