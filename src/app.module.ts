import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { I18nModule } from './i18n/i18n.module';
import { AggregateByLocaleContextIdStrategy } from './core/aggregate-by-locale.strategy';
import { ContextIdFactory } from '@nestjs/core';

ContextIdFactory.apply(new AggregateByLocaleContextIdStrategy()); 
@Module({
  imports: [I18nModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
