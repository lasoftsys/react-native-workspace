import { Button } from "@shared-ui";
import React from 'react'

export interface TabButtonProps {
	currentTab?: string;
	title: string;
	icon: React.ReactNode;
	onPress?: () => void;
}

export function TabButton(
	{ currentTab, title, icon, onPress }: TabButtonProps
) {
	return (
		<Button
			onPress={onPress}
			className="flex-row items-center justify-center p-0 h-14 w-14 rounded-xl mb-3"
			customStyles={{ backgroundColor: currentTab === title ? "rgba(3,109,137,.4)" : "transparent" }}
		>
			{icon}
		</Button >
	);
}

export default TabButton;
