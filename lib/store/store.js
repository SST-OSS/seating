import { create } from "zustand";
import { persist } from "zustand/middleware";

const user = (set) => ({
  name: null,
  isBatchManager: false,
  batchNumber: null,
  id: null,
  imageUrl: null,
  isLoggedIn: false,
  selectedBatch: 0,
  seatedCol: "",
  seatedRow: "",
  searchedUser: "",
  searchedBatch: "",
  searchedId: "",
  updateSearchedUser: (user) => {
    set((state) => {
      return {
        searchedUser: user,
      };
    });
  },
  setSearchedBatch: (batch) => {
    set((state) => {
      return {
        searchedBatch: batch,
      };
    });
  },
  setSearchedId: (search) => {
    set((state) => {
      return {
        searchedId: search,
      };
    });
  },
  updateCol: (col) => {
    set((state) => {
      return {
        seatedCol: col,
      };
    });
  },
  updateRow: (row) => {
    set((state) => {
      return {
        seatedRow: row,
      };
    });
  },

  updateBatch: (batchNumber) => {
    set((state) => {
      return {
        selectedBatch: batchNumber,
      };
    });
  },

  updateIsBatchManager: (isBatchManager) => {
    set((state) => {
      return {
        isBatchManager: isBatchManager,
      };
    });
  },

  batchManagerLogin: (name, email, batchNumber, id, imageUrl) => {
    set((state) => {
      return {
        name,
        email,
        batchNumber,
        id,
        imageUrl,
        isLoggedIn: true,
        isBatchManager: true,
      };
    });
  },

  batchManagerLogout: () => {
    set((state) => {
      return {
        name: null,
        email: null,
        batchNumber: null,
        id: null,
        imageUrl: null,
        isLoggedIn: false,
        isBatchManager: false,
      };
    });
  },

  login: (name, batchNumber, id, imageUrl) => {
    set((state) => {
      return {
        name,
        batchNumber,
        id,
        imageUrl,
        isLoggedIn: true,
        isBatchManager: false,
      };
    });
  },

  logout: () => {
    set((state) => {
      return {
        name: null,
        batchNumber: null,
        id: null,
        imageUrl: null,
        isLoggedIn: false,
      };
    });
  },
});

export const useUser = create(persist(user, { name: "_auth" }));
