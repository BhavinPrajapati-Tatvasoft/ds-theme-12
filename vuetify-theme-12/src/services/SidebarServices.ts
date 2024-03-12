// useSidebarService.ts
import { onMounted, ref, Ref, watch } from "vue";
const MobileDevice = 1280;

// Exports
interface SidebarService {
  sidebarState: Ref<{ isSidebarOpen: boolean }>;
  toggleSidebar: () => void;
  closeSidebar: () => void;
}

// sidebar State
const sidebarState = ref({
  isSidebarOpen: false,
});

if (window.innerWidth >= MobileDevice) {
  sidebarState.value.isSidebarOpen = true;
}

export const useSidebarService = (): SidebarService => {
  // Toggle Sidebar
  const toggleSidebar = () => {
    sidebarState.value.isSidebarOpen = !sidebarState.value.isSidebarOpen;
  };

  // Close Sidebar
  const closeSidebar = () => {
    if (window.innerWidth < MobileDevice) {
      setTimeout(() => {
        sidebarState.value.isSidebarOpen = false;
      }, 100);
    }
  };

  // Resize Window
  const handleResize = () => {
    if (window.innerWidth < MobileDevice) {
      sidebarState.value.isSidebarOpen = false;
    }
  };

  watch(() => window.innerWidth, handleResize);

  // OnLoad
  onMounted(() => {
    handleResize(); // Set initial state on component mount
    window.addEventListener("resize", handleResize);
  });

  // Return Functions/States
  return { sidebarState, toggleSidebar, closeSidebar };
};
