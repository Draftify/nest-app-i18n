import { Inject } from '@nestjs/common';
import { Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type * as Schema from '../assets/locales/en.json';
import * as en from '../assets/locales/en.json';
import * as bn from '../assets/locales/bn.json';


@Injectable({ scope: Scope.REQUEST, durable: true })
export class I18nService {
    constructor(
        @Inject(REQUEST) private readonly payload: { localeCode: string },
      ) {}

    public static readonly defaultLanguage = 'en';
    public static readonly supportedLanguages = ['en', 'bn'];
    private readonly locales: Record<string, typeof Schema> = { en, bn };

    translate(key: keyof typeof Schema): string{
    const locale =
        this.locales[this.payload.localeCode ?? I18nService.defaultLanguage];
     const text = locale[key]
     return text;   
    }
}
