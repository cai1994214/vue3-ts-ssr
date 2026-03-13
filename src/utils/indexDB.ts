class DB {
  private dbName: string;
  private db: IDBDatabase | null = null;

  constructor(dbName: string) {
    this.dbName = dbName;
  }

  public openStore(storeName: string, keyPath: string, indexes: string[] = []) {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return Promise.reject(new Error('IndexedDB is not available in the current environment.'));
    }

    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName, 2);

      request.onsuccess = (event) => {
        const target = event.target as IDBOpenDBRequest | null;
        this.db = target?.result ?? null;

        if (!this.db) {
          reject(new Error('Failed to open IndexedDB database.'));
          return;
        }

        resolve(this.db);
      };

      request.onerror = () => {
        reject(request.error ?? new Error('Failed to open IndexedDB database.'));
      };

      request.onupgradeneeded = (event) => {
        const target = event.target as IDBOpenDBRequest | null;
        const database = target?.result;

        if (!database) {
          return;
        }

        if (database.objectStoreNames.contains(storeName)) {
          return;
        }

        const store = database.createObjectStore(storeName, {
          autoIncrement: true,
          keyPath,
        });

        store.transaction.oncomplete = () => undefined;

        indexes.forEach((item) => {
          store.createIndex(item, item, { unique: false });
        });
      };
    });
  }

  private getStore(storeName: string, mode: IDBTransactionMode) {
    if (!this.db) {
      throw new Error('IndexedDB database has not been opened yet.');
    }

    return this.db.transaction([storeName], mode).objectStore(storeName);
  }

  public updateItem<T extends Record<string, unknown>>(storeName: string, data: T) {
    return new Promise<IDBValidKey>((resolve, reject) => {
      const store = this.getStore(storeName, 'readwrite');
      const request = store.put({ ...data, updateTime: Date.now() });

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error ?? new Error('Failed to update IndexedDB item.'));
      };
    });
  }

  public deleteItem(storeName: string, key: IDBValidKey) {
    return new Promise<void>((resolve, reject) => {
      const store = this.getStore(storeName, 'readwrite');
      const request = store.delete(key);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error ?? new Error('Failed to delete IndexedDB item.'));
      };
    });
  }

  public getList<T = unknown>(storeName: string) {
    return new Promise<T[]>((resolve, reject) => {
      const store = this.getStore(storeName, 'readonly');
      const request = store.getAll();

      request.onsuccess = () => {
        resolve((request.result ?? []) as T[]);
      };

      request.onerror = () => {
        reject(request.error ?? new Error('Failed to read IndexedDB items.'));
      };
    });
  }

  public getItem<T = unknown>(storeName: string, key: IDBValidKey) {
    return new Promise<T | undefined>((resolve, reject) => {
      const store = this.getStore(storeName, 'readonly');
      const request = store.get(key);

      request.onsuccess = () => {
        resolve(request.result as T | undefined);
      };

      request.onerror = () => {
        reject(request.error ?? new Error('Failed to read IndexedDB item.'));
      };
    });
  }
}

export default DB;
