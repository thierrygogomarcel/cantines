<template>
  <div class="max-w-4xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Tableau de bord - Parent</h1>
      <p class="mt-2 text-gray-600">Gérer les tickets-repas de vos enfants</p>
    </div>

    <div class="grid gap-6">
      <!-- Solde et rechargement -->
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-900">Solde actuel</h2>
            <p class="text-3xl font-bold text-primary-600 mt-2">12 tickets</p>
          </div>
          <button
            @click="showRechargeModal = true"
            class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Recharger
          </button>
        </div>
        
        <div class="border-t pt-4">
          <h3 class="text-sm font-medium text-gray-700 mb-2">Dernières transactions</h3>
          <div class="space-y-2">
            <div v-for="transaction in transactions" :key="transaction.id" class="flex justify-between text-sm">
              <span class="text-gray-600">{{ transaction.date }}</span>
              <span :class="transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'">
                {{ transaction.type === 'credit' ? '+' : '-' }}{{ transaction.amount }} tickets
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- QR Code de l'enfant -->
      <QRCodeGenerator student-id="123456" />
    </div>

    <!-- Modal de rechargement -->
    <TransitionRoot appear :show="showRechargeModal" as="template">
      <Dialog as="div" @close="showRechargeModal = false" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 mb-4">
                  Recharger des tickets-repas
                </DialogTitle>

                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de tickets
                    </label>
                    <select
                      v-model="ticketsToRecharge"
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
                    >
                      <option value="5">5 tickets - 25€</option>
                      <option value="10">10 tickets - 45€</option>
                      <option value="20">20 tickets - 85€</option>
                    </select>
                  </div>

                  <div class="space-y-2">
                    <button
                      @click="handlePayment('card')"
                      class="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Payer par carte
                    </button>
                    <PayPalButton
                      :amount="getAmount()"
                      @success="handlePayPalSuccess"
                      @error="handlePayPalError"
                    />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue';
import dayjs from 'dayjs';

const showRechargeModal = ref(false);
const ticketsToRecharge = ref('10');

const transactions = [
  { id: 1, date: dayjs().subtract(1, 'day').format('DD/MM/YYYY'), type: 'debit', amount: 1 },
  { id: 2, date: dayjs().subtract(3, 'day').format('DD/MM/YYYY'), type: 'credit', amount: 10 },
  { id: 3, date: dayjs().subtract(5, 'day').format('DD/MM/YYYY'), type: 'debit', amount: 1 },
];

const getAmount = () => {
  const prices = {
    '5': 25,
    '10': 45,
    '20': 85
  };
  return prices[ticketsToRecharge.value as keyof typeof prices];
};

const handlePayment = async (method: 'card' | 'paypal') => {
  // TODO: Implémenter le paiement
  showRechargeModal.value = false;
};

const handlePayPalSuccess = (details: any) => {
  // TODO: Valider le paiement côté serveur
  showRechargeModal.value = false;
};

const handlePayPalError = (error: Error) => {
  console.error('PayPal error:', error);
};
</script>