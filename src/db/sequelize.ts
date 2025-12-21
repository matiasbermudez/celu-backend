import { Sequelize } from 'sequelize'
import 'dotenv/config'

export const sequelizeOn = new Sequelize(process.env.URL_DATABASE!, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export const connectDB = async () => {
  try {
    await sequelizeOn.authenticate()
    console.log('✅ DB conectada')
  } catch (error) {
    console.error('❌ Error DB:', error)
  }
}
