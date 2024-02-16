import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

interface MetricsContextInterface {
  isEmptyData: boolean;
  isDataLoading: boolean;
  setIsEmptyData: (flag: boolean) => void;
  setIsDataLoading: (flag: boolean) => void;
}

interface MetricContextProviderProps extends PropsWithChildren {}

const defaultContext: MetricsContextInterface = {
  isEmptyData: true,
  isDataLoading: true,
  setIsEmptyData: () => null,
  setIsDataLoading: () => null,
};

export const MetricContext =
  createContext<MetricsContextInterface>(defaultContext);

export const MetricContextProvider: FC<MetricContextProviderProps> = ({
  children,
}) => {
  const [isEmptyData, setIsEmptyData] = useState<boolean>(
    defaultContext.isEmptyData
  );

  const [isDataLoading, setIsDataLoading] = useState<boolean>(
    defaultContext.isEmptyData
  );

  const value = useMemo(
    () => ({
      isEmptyData,
      isDataLoading,
      setIsEmptyData,
      setIsDataLoading,
    }),
    [isEmptyData, setIsEmptyData, isDataLoading, setIsDataLoading]
  );

  return (
    <MetricContext.Provider value={value}>{children}</MetricContext.Provider>
  );
};

export const useMetrics = () =>
  useContext<MetricsContextInterface>(MetricContext);
