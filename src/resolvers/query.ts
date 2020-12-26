import { IResolvers } from 'graphql-tools';


const resolversQuery: IResolvers = {
    Query: {
        users(root, args, context, info) {
            console.log(root);
            console.log(args);
            console.log(context);
            console.log(info);
            return [
                {
                    id: 123,
                    name: 'Alexis',
                    lastName: 'Narvaez',
                    email: 'alexisnarvaez@hotmail.com',
                    password: 'pozole123',
                    registerDate: '',
                    birthday: '',
                }
            ];
        }
    }
};

export default resolversQuery;