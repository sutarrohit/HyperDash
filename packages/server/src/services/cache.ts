import NodeCache from "node-cache";

class CacheService {
    private cache: NodeCache;

    constructor() {
        this.cache = new NodeCache();
    }

    get<T>(key: string): T | undefined {
        return this.cache.get<T>(key);
    }

    set<T>(key: string, value: T, ttl?: number): void {
        if (ttl !== undefined) {
            this.cache.set(key, value, ttl);
        } else {
            this.cache.set(key, value);
        }
    }

    del(key: string): void {
        this.del(key);
    }

    generateKey(prefix: string, ...parts: string[]): string {
        return [prefix, ...parts].join(":");
    }
}

export const cacheService = new CacheService();
