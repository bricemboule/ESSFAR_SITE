import React from "react";
import Image from "../images/conFi.jpeg";

const Association = () => {
    return (
        <>
            <div className="relative z-[-1]">
                <img className="w-full h-[500px]" src={Image} />
            </div>
            <div className="my-8">
                <h1 className="text-sky-500 text-center text-3xl">Frais</h1>
                <div className="py-5">
                    <div className="flex flex-col p-3">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-center text-sm font-light">
                                        <thead className="border-b bg-sky-500 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    Frais
                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    Licence 1
                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    Licence 2
                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    Licence 3
                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    Master 1 & 2
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                    Concours
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    20 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    20 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    20 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    20 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                    Inscription administration
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4 ">
                                                    230 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    230 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    230 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    230 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                    Scolarite
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    1 800 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    1 800 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    2 000 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    2 300 000
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                    TOTAUX
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    2 030 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    2 030 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    2 230 000
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    2 530 000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <h1 className="text-sky-500 text-center text-3xl">
                    Modalités de règlement de la scolarité
                </h1>
                <div className="py-5 ">
                    <div className="flex flex-col p-3">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-center text-sm font-light">
                                        <thead className="border-b bg-sky-500 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    1 <sup>ère</sup> tranche
                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    2 <sup>ième</sup> tranche
                                                </th>
                                                <th
                                                    scope="col"
                                                    className=" px-6 py-4"
                                                >
                                                    3 <sup>ième</sup> tranche
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                                    40% en octobre
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    40% en janvier
                                                </td>
                                                <td className="whitespace-nowrap  px-6 py-4">
                                                    20% en mars
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Association;
