import { StackNavigator } from 'react-navigation';

import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';

export default StackNavigator({
    'SerieDetail': {
        screen: SerieDetailPage,
        navigationOptions: ({ navigation }) => {
            // const { serie } = navigation.state.params;
            const serie = {
                "id": 3,
                "title": "Todo mundo odeia o Chris",
                "gender": "Comédia",
                "rate": 100,
                "img":
                    "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NTg4MTc5OF5BMl5BanBnXkFtZTcwMzc2MzYzMQ@@._V1_.jpg",
                "description":
                    "Everybody Hates Chris (Todo Mundo Odeia o Chris (título no Brasil) ou Todos Contra o Chris (título em Portugal)) é uma série de televisão estadunidense de comédia dramática inspirado nas experiências pessoais de Chris Rock no bairro de Bed-Stuy, em Nova Iorque, seguindo um estilo muito parecido com a série Anos Incríveis."
            }
            return {
                title: serie.title
            }
        }
    },
    'Main': {
        screen: SeriesPage
    },
    'Login': {
        screen: LoginPage,
        navigationOptions: {
            title: 'Bem vindo!',
        }
    },

}, {
    navigationOptions: {
        title: "Series!",
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5',
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: 30,
        }
    }
});