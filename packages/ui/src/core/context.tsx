"use client"

import {IAPIService } from "./api.service"

export type ContextStore = {
    getAPIService: <T>(key: string) => IAPIService<T>
}


