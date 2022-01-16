/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface InboxInterface extends ethers.utils.Interface {
  functions: {
    'bridge()': FunctionFragment
    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)': FunctionFragment
    'depositEth(address)': FunctionFragment
    'depositEthRetryable(address,uint256,uint256,uint256)': FunctionFragment
    'sendContractTransaction(uint256,uint256,address,uint256,bytes)': FunctionFragment
    'sendL1FundedContractTransaction(uint256,uint256,address,bytes)': FunctionFragment
    'sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)': FunctionFragment
    'sendL2Message(bytes)': FunctionFragment
    'sendL2MessageFromOrigin(bytes)': FunctionFragment
    'sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'bridge', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'createRetryableTicket',
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(functionFragment: 'depositEth', values: [string]): string
  encodeFunctionData(
    functionFragment: 'depositEthRetryable',
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'sendContractTransaction',
    values: [BigNumberish, BigNumberish, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'sendL1FundedContractTransaction',
    values: [BigNumberish, BigNumberish, string, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'sendL1FundedUnsignedTransaction',
    values: [BigNumberish, BigNumberish, BigNumberish, string, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'sendL2Message',
    values: [BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'sendL2MessageFromOrigin',
    values: [BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'sendUnsignedTransaction',
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BytesLike
    ]
  ): string

  decodeFunctionResult(functionFragment: 'bridge', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'createRetryableTicket',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'depositEth', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'depositEthRetryable',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sendContractTransaction',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sendL1FundedContractTransaction',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sendL1FundedUnsignedTransaction',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sendL2Message',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sendL2MessageFromOrigin',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sendUnsignedTransaction',
    data: BytesLike
  ): Result

  events: {
    'InboxMessageDelivered(uint256,bytes)': EventFragment
    'InboxMessageDeliveredFromOrigin(uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'InboxMessageDelivered'): EventFragment
  getEvent(
    nameOrSignatureOrTopic: 'InboxMessageDeliveredFromOrigin'
  ): EventFragment
}

export class Inbox extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: InboxInterface

  functions: {
    bridge(overrides?: CallOverrides): Promise<[string]>

    'bridge()'(overrides?: CallOverrides): Promise<[string]>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    depositEth(
      destAddr: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'depositEth(address)'(
      destAddr: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    depositEthRetryable(
      destAddr: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      maxGasPrice: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'depositEthRetryable(address,uint256,uint256,uint256)'(
      destAddr: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      maxGasPrice: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'sendContractTransaction(uint256,uint256,address,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'sendL1FundedContractTransaction(uint256,uint256,address,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'sendL2Message(bytes)'(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'sendL2MessageFromOrigin(bytes)'(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  bridge(overrides?: CallOverrides): Promise<string>

  'bridge()'(overrides?: CallOverrides): Promise<string>

  createRetryableTicket(
    destAddr: string,
    l2CallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    excessFeeRefundAddress: string,
    callValueRefundAddress: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
    destAddr: string,
    l2CallValue: BigNumberish,
    maxSubmissionCost: BigNumberish,
    excessFeeRefundAddress: string,
    callValueRefundAddress: string,
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  depositEth(
    destAddr: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'depositEth(address)'(
    destAddr: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  depositEthRetryable(
    destAddr: string,
    maxSubmissionCost: BigNumberish,
    maxGas: BigNumberish,
    maxGasPrice: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'depositEthRetryable(address,uint256,uint256,uint256)'(
    destAddr: string,
    maxSubmissionCost: BigNumberish,
    maxGas: BigNumberish,
    maxGasPrice: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  sendContractTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'sendContractTransaction(uint256,uint256,address,uint256,bytes)'(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  sendL1FundedContractTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'sendL1FundedContractTransaction(uint256,uint256,address,bytes)'(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  sendL1FundedUnsignedTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)'(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  sendL2Message(
    messageData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'sendL2Message(bytes)'(
    messageData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  sendL2MessageFromOrigin(
    messageData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'sendL2MessageFromOrigin(bytes)'(
    messageData: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  sendUnsignedTransaction(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)'(
    maxGas: BigNumberish,
    gasPriceBid: BigNumberish,
    nonce: BigNumberish,
    destAddr: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    bridge(overrides?: CallOverrides): Promise<string>

    'bridge()'(overrides?: CallOverrides): Promise<string>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    depositEth(destAddr: string, overrides?: CallOverrides): Promise<BigNumber>

    'depositEth(address)'(
      destAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    depositEthRetryable(
      destAddr: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      maxGasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'depositEthRetryable(address,uint256,uint256,uint256)'(
      destAddr: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      maxGasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'sendContractTransaction(uint256,uint256,address,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'sendL1FundedContractTransaction(uint256,uint256,address,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sendL2Message(
      messageData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'sendL2Message(bytes)'(
      messageData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'sendL2MessageFromOrigin(bytes)'(
      messageData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  filters: {
    InboxMessageDelivered(
      messageNum: BigNumberish | null,
      data: null
    ): EventFilter

    InboxMessageDeliveredFromOrigin(
      messageNum: BigNumberish | null
    ): EventFilter
  }

  estimateGas: {
    bridge(overrides?: CallOverrides): Promise<BigNumber>

    'bridge()'(overrides?: CallOverrides): Promise<BigNumber>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    depositEth(
      destAddr: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'depositEth(address)'(
      destAddr: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    depositEthRetryable(
      destAddr: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      maxGasPrice: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'depositEthRetryable(address,uint256,uint256,uint256)'(
      destAddr: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      maxGasPrice: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'sendContractTransaction(uint256,uint256,address,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'sendL1FundedContractTransaction(uint256,uint256,address,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'sendL2Message(bytes)'(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'sendL2MessageFromOrigin(bytes)'(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'bridge()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    createRetryableTicket(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)'(
      destAddr: string,
      l2CallValue: BigNumberish,
      maxSubmissionCost: BigNumberish,
      excessFeeRefundAddress: string,
      callValueRefundAddress: string,
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    depositEth(
      destAddr: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'depositEth(address)'(
      destAddr: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    depositEthRetryable(
      destAddr: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      maxGasPrice: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'depositEthRetryable(address,uint256,uint256,uint256)'(
      destAddr: string,
      maxSubmissionCost: BigNumberish,
      maxGas: BigNumberish,
      maxGasPrice: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    sendContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'sendContractTransaction(uint256,uint256,address,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    sendL1FundedContractTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'sendL1FundedContractTransaction(uint256,uint256,address,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    sendL1FundedUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'sendL1FundedUnsignedTransaction(uint256,uint256,uint256,address,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    sendL2Message(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'sendL2Message(bytes)'(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    sendL2MessageFromOrigin(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'sendL2MessageFromOrigin(bytes)'(
      messageData: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    sendUnsignedTransaction(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes)'(
      maxGas: BigNumberish,
      gasPriceBid: BigNumberish,
      nonce: BigNumberish,
      destAddr: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
