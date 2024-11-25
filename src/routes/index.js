import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from '../pages/welcome'
import Register from "../pages/novo_usuario";
import ConfirSenha from "../pages/confirmarSenha";
import AcessarConta from "../pages/acessarConta";
import Navegacao from "../pages/navegacao/tab";
import AlunoDashboard from "../pages/dashboard/aluno";
import Navega from "../pages/navegacao/drawer";


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='acessarConta'
                component={AcessarConta}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="register"
                component={Register}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="confirSenha"
                component={ConfirSenha}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="navegacao"
                component={Navegacao}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name="alunoDashboard"
                component={AlunoDashboard}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name='navegaDrawer'
                component={Navega}
                options={{
                    headerShown: false
                }}
            />


        </Stack.Navigator>
    )
}