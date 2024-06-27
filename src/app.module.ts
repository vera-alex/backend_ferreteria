import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { VentasModule } from './ventas/ventas.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { ComprasModule } from './compras/compras.module';
import { DetalleventasModule } from './detalleventas/detalleventas.module';
import { DetallecomprasModule } from './detallecompras/detallecompras.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '**/*.entity.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    VentasModule,
    EmpleadosModule,
    ClientesModule,
    ProveedoresModule,
    UsuariosModule,
    CategoriasModule,
    ProductosModule,
    ComprasModule,
    DetalleventasModule,
    DetallecomprasModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
